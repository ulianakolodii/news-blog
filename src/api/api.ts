import { Paths, ExtractFromAPI, Parameters, FactoryProps } from "./types";
import { OmitKeysDeep } from "./types-utils";
import { replacePathParameters } from "./replacePathParameters";
import { serialize } from "./serialize";

const createRequest = <Key extends keyof Paths>(base: Key, { baseUrl = "" }) =>
  async function request<
    Path extends keyof Paths[Key],
    Method extends keyof Paths[Key][Path]
  >(
    path: Path,
    method: Method,
    parameters: OmitKeysDeep<
      Parameters<Paths[Key][Path][Method]>,
      "query.session"
    > = {} as OmitKeysDeep<
      Parameters<Paths[Key][Path][Method]>,
      "query.session"
    >
  ): Promise<ExtractFromAPI<Key, Path, Method>> {
    const {
      query = {},
      path: parametersPath,
      headers = {},
    } = parameters as unknown as {
      query: Record<string, unknown>;
      path: Record<string, string>;
      headers: HeadersInit;
    };

    const url = `${baseUrl}${replacePathParameters(
      path as string,
      parametersPath
    )}?${serialize(query)}`;
    const params = {
      method: method as string,
      ...((<{ body: Record<string, string> }>(<unknown>parameters))?.body?.body
        ? {
            body: JSON.stringify(
              (<{ body: Record<string, string> }>(<unknown>parameters)).body
                .body
            ),
          }
        : {}),
      headers,
    };

    const response = await fetch(url, params);
    if (response.ok) {
      return response.json();
    }
    throw await response.json();
  };

/**
 * Factory returning an API to do requests to the API gateway for the server side,
 * or using the clientSide proxyAPI object
 */
const createAPI: FactoryProps = ({ baseUrl }) => ({
  article: createRequest("article", { baseUrl }),
});

export const api = createAPI({
  baseUrl: "https://api.spaceflightnewsapi.net",
  getAccessToken: () => Promise.resolve(""),
});

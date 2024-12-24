import { ServerResponse } from "http";
import { APIException } from "../api";
import * as mime from "mime-types";

export class HTTPUtil {
    static contentTypeOf(path: string) {
        return mime.lookup(path) || "application/octet-stream";
    }

    static parseRequest<T>(given: Buffer | string, response: ServerResponse): T | null {
        try {
            const data = typeof given === "string"
                ? given             // when string
                : given.toString(); // when buffer
            return JSON.parse(data) as T;
        } catch {
            response.writeHead(400);
            response.end(APIException.INVALID_REQUEST_FORMAT);
            return null;
        }
    }
}
import { ServerResponse } from "http";
import { APIException } from "../api";
import * as mime from "mime-types";

export class HTTPUtil {
    static contentTypeOf(path: string) {
        return mime.lookup(path) || "application/octet-stream";
    }

    static parseRequest<T>(buffer: Buffer, response: ServerResponse): T | null {
        try {
            return JSON.parse(buffer.toString()) as T;
        } catch {
            response.writeHead(400);
            response.end(APIException.INVALID_REQUEST_FORMAT);
            return null;
        }
    }
}
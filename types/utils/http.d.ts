import { ServerResponse } from "http";
export declare class HTTPUtil {
    static contentTypeOf(path: string): string;
    static parseRequest<T>(buffer: Buffer, response: ServerResponse): T | null;
}

import { ServerResponse } from "http";
export declare class HTTPUtil {
    static contentTypeOf(path: string): string;
    static parseRequest<T>(given: Buffer | string, response: ServerResponse): T | null;
}

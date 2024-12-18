import * as http from "http";
export declare class HTTPConnection {
    paths: string[];
    request: http.IncomingMessage;
    response: http.ServerResponse;
    constructor(paths: string[], request: http.IncomingMessage, response: http.ServerResponse);
    get fristPath(): string;
    consume(): HTTPConnection;
}

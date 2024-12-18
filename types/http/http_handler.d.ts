import * as http from "http";
import { HTTPConnection } from "./http_connection";
export type HTTPHandlerCallback = {
    put?: HTTPHandlerListener;
    get?: HTTPHandlerListener;
    head?: HTTPHandlerListener;
    post?: HTTPHandlerListener;
    patch?: HTTPHandlerListener;
    delete?: HTTPHandlerListener;
};
export type HTTPHandlerListener = (request: http.IncomingMessage, response: http.ServerResponse, requestBody: Buffer) => Promise<void> | void;
export declare class HTTPHandler {
    callback: HTTPHandlerCallback;
    constructor(callback: HTTPHandlerCallback);
    /** Delegates the response task to this handler by a given http-connection. */
    delegate(connection: HTTPConnection): void;
}

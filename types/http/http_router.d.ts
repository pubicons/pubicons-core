import { HTTPConnection } from "./http_connection";
import { HTTPHandler } from "./http_handler";
export declare class HTTPRouter {
    path: string;
    handler?: HTTPHandler;
    children?: HTTPRouter[];
    constructor(path: string, handler?: HTTPHandler, children?: HTTPRouter[]);
    handle(connection: HTTPConnection): void;
    /** Delegates the response task to the http-handler corresponding to the user request path. */
    delegate(connection: HTTPConnection): void;
    /** Delegates the response task to the http-handler based on self. */
    perform(connection: HTTPConnection): void;
}

import { worker } from "./mocks/browser";

worker.start({
    onUnhandledRequest: "bypass",
});
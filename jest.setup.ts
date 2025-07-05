import { TextDecoder, TextEncoder } from "util";

require("dotenv").config();

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

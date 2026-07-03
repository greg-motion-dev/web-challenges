// Implement the launch sequence function here and export it as the default export.
import { loadPayload } from "./core/load.js";
import { FISHSAT, NFSAT } from "./payload/satellites.js";
import { fuel } from "./core/fuel.js";
import { countdown } from "./core/countdown.js";
import { liftoff } from "./core/liftoff.js";
import { deployPayload } from "./core/deploy.js";
 

export default function launch(){

    // Load Payload
    loadPayload(NFSAT);
    loadPayload(FISHSAT);

    // Add fuel
    fuel();

    //run countdown 5 times
    for (let run = 0; run < 5; run++) {
    countdown(run);
    }

    liftoff();
    deployPayload();


}
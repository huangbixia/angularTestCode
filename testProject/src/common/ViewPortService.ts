import { SmallService } from "./SmallService";
import { LargeService } from "./LargeService";

export class ViewPortService {
    determineService(): any {
        let w:number = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

        if (w > 800) {
            return new SmallService();
        }
        return new LargeService();
    }
}
// @ts-ignore
import { captureOneImage, waitForNextFrame, runScene, testCase, testClass } from 'db://automation-framework/runtime/test-framework.mjs';

@runScene('sort')
@testClass('sort')
export class sort {
    @testCase
    async startPlay() {
        await waitForNextFrame();
        await captureOneImage();
    }
}
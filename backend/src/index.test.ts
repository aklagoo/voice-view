import {describe, it} from '@jest/globals';
import { app, server } from './index';
import request from 'supertest';
import { Express } from 'express-serve-static-core';
import { Server } from 'http';

let runtimeApp: Express;
let runtimeServer: Server;

beforeAll(() => {
    runtimeApp = app;
    runtimeServer = server;
});

describe("Server", () => {
    it("should return status code 200.", (done) => {
        request(runtimeApp).get('/').then((res) => {
            expect(res.statusCode).toBe(200);
            done();
        });
    });
});

afterAll(() => {
    runtimeServer.close();
});
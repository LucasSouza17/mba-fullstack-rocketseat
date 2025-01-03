"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var faker_1 = require("@faker-js/faker");
var client_1 = require("@prisma/client");
var bcryptjs_1 = require("bcryptjs");
var node_crypto_1 = require("node:crypto");
var promises_1 = require("node:fs/promises");
var node_path_1 = require("node:path");
var slugify_1 = require("slugify");
var prisma = new client_1.PrismaClient();
var TEMP_DIR = node_path_1.default.resolve(process.cwd(), 'temp');
var IMAGES = [
    node_path_1.default.resolve(__dirname, './images/camiseta.jpeg'),
    node_path_1.default.resolve(__dirname, './images/carro.jpeg'),
    node_path_1.default.resolve(__dirname, './images/liquidificador.jpg'),
    node_path_1.default.resolve(__dirname, './images/moto.jpg'),
    node_path_1.default.resolve(__dirname, './images/sofa.jpg'),
];
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var tempFiles, categories, seller, _a, _b, viewers;
        var _c, _d;
        var _this = this;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0: return [4 /*yield*/, promises_1.default.readdir(TEMP_DIR)];
                case 1:
                    tempFiles = _e.sent();
                    if (!tempFiles.length) return [3 /*break*/, 3];
                    console.log('Deleting temp files...');
                    return [4 /*yield*/, Promise.all(tempFiles.map(function (file) { return promises_1.default.unlink(node_path_1.default.join(TEMP_DIR, file)); }))];
                case 2:
                    _e.sent();
                    _e.label = 3;
                case 3: return [4 /*yield*/, prisma.view.deleteMany()];
                case 4:
                    _e.sent();
                    return [4 /*yield*/, prisma.product.deleteMany()];
                case 5:
                    _e.sent();
                    return [4 /*yield*/, prisma.user.deleteMany()];
                case 6:
                    _e.sent();
                    return [4 /*yield*/, prisma.category.deleteMany()];
                case 7:
                    _e.sent();
                    return [4 /*yield*/, prisma.attachment.deleteMany()];
                case 8:
                    _e.sent();
                    return [4 /*yield*/, prisma.category.createManyAndReturn({
                            data: [
                                { title: 'Eletrodomésticos' },
                                { title: 'Eletrônicos' },
                                { title: 'Informática' },
                                { title: 'Móveis' },
                                { title: 'Decoração' },
                                { title: 'Moda' },
                                { title: 'Esportes' },
                                { title: 'Brinquedos' },
                                { title: 'Livros' },
                                { title: 'Alimentos' },
                            ].map(function (category) {
                                return {
                                    id: (0, node_crypto_1.randomUUID)(),
                                    title: category.title,
                                    slug: (0, slugify_1.default)(category.title, { lower: true }),
                                };
                            }),
                        })];
                case 9:
                    categories = _e.sent();
                    _b = (_a = prisma.user).create;
                    _c = {};
                    _d = {
                        id: (0, node_crypto_1.randomUUID)(),
                        name: 'Seller',
                        email: 'seller@mba.com'
                    };
                    return [4 /*yield*/, (0, bcryptjs_1.hash)('123456', 8)];
                case 10: return [4 /*yield*/, _b.apply(_a, [(_c.data = (_d.password = _e.sent(),
                            _d.phone = faker_1.faker.phone.number(),
                            _d),
                            _c)])];
                case 11:
                    seller = _e.sent();
                    return [4 /*yield*/, prisma.user.createManyAndReturn({
                            data: Array.from({ length: faker_1.faker.number.int({ min: 1, max: 15 }) }).map(function () { return ({
                                id: (0, node_crypto_1.randomUUID)(),
                                name: faker_1.faker.person.firstName(),
                                email: faker_1.faker.internet.email(),
                                password: faker_1.faker.internet.password(),
                                phone: faker_1.faker.phone.number(),
                            }); }),
                        })];
                case 12:
                    viewers = _e.sent();
                    return [4 /*yield*/, Promise.all(Array.from({ length: faker_1.faker.number.int({ min: 5, max: 20 }) }).map(function () { return __awaiter(_this, void 0, void 0, function () {
                            var productViewers, fileId, filename;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        productViewers = faker_1.faker.helpers.arrayElements(viewers);
                                        fileId = (0, node_crypto_1.randomUUID)();
                                        filename = "".concat(fileId, ".png");
                                        return [4 /*yield*/, promises_1.default.copyFile(faker_1.faker.helpers.arrayElement(IMAGES), node_path_1.default.join(TEMP_DIR, filename))];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/, prisma.product.create({
                                                data: {
                                                    id: (0, node_crypto_1.randomUUID)(),
                                                    title: faker_1.faker.commerce.productName(),
                                                    description: faker_1.faker.commerce.productDescription(),
                                                    priceInCents: faker_1.faker.number.int({ min: 1000, max: 100000 }),
                                                    ownerId: seller.id,
                                                    status: faker_1.faker.helpers.arrayElement(['available', 'cancelled', 'sold']),
                                                    categoryId: faker_1.faker.helpers.arrayElement(categories).id,
                                                    views: {
                                                        createMany: {
                                                            data: productViewers.map(function (viewer) { return ({
                                                                id: (0, node_crypto_1.randomUUID)(),
                                                                viewerId: viewer.id,
                                                                createdAt: faker_1.faker.date.recent({ days: 50 }),
                                                            }); }),
                                                        },
                                                    },
                                                    attachments: {
                                                        create: {
                                                            id: fileId,
                                                            path: filename,
                                                        },
                                                    },
                                                },
                                            })];
                                }
                            });
                        }); }))];
                case 13:
                    _e.sent();
                    return [2 /*return*/];
            }
        });
    });
}
main();

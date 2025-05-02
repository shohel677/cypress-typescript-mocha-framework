export class TestDataStore {
    static data: { [key: string]: string } = {}; // Store key-value pairs in an object

    static loadFixtureData(fixture: any) {
        this.data = fixture;
    }

    static getData(key: string): string | undefined {
        return this.data[key];
    }
}
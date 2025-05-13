import {ApiPage} from "../pages/api_page";

describe('API Test Suite - JSONPlaceholder', () => {
    const apiPage = new ApiPage();
    let createdPostId: number;

    it('GET - Should fetch all posts', () => {
        apiPage.getPosts().then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.an('array');
            expect(response.body.length).to.be.greaterThan(0);
        });
    });

    it('POST - Should create a new post using JSON file', () => {
        apiPage.createPostFromJson().then((response) => {
                expect(response.status).to.eq(201);
                expect(response.body).to.have.property('id');
                expect(response.body.title).to.eq('');
                createdPostId = response.body.id;
            });
        });


    it('PUT - Should update the post using JSON file', () => {
        apiPage.updatePost().then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.title).to.eq('');
            });
        });


    it('PATCH - Should partially update the post using JSON file', () => {
        apiPage.partialUpdatePost().then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.title).to.eq('');
            });
        });


    it('DELETE - Should delete the post', () => {
        apiPage.deletePost().then((response) => {
            expect(response.status).to.eq(200);
        });
    });
});

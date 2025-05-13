export class ApiPage {
    private headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer dummy-token' // Replace with actual token if needed
    };

    // GET request: Fetch data from server
    getPosts() {
        return cy.request({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/posts',
            headers: this.headers
        });
    }

    // POST request: Create a new post using data from a JSON file
    createPostFromJson() {
        return cy.fixture('postData.json').then((postData) => {
            return cy.request({
                method: 'POST',
                url: 'https://jsonplaceholder.typicode.com/posts',
                headers: this.headers,
                body: postData
            });
        });
    }

    // PUT request: Update an existing post
    updatePost() {
        return cy.fixture('updatedPostData.json').then((updatedPostData) => {
            return cy.request({
                method: 'PUT',
                url: `https://jsonplaceholder.typicode.com/posts/1`,
                headers: this.headers,
                body: updatedPostData
            });
        });
    }

    // PATCH request: Partially update a post
    partialUpdatePost() {
        return cy.fixture('updatedData.json').then((updatedData) => {
            return cy.request({
                method: 'PATCH',
                url: `https://jsonplaceholder.typicode.com/posts/1`,
                headers: this.headers,
                body: updatedData
            });
        });
    }

    // DELETE request: Delete a post
    deletePost() {
        return cy.request({
            method: 'DELETE',
            url: `https://jsonplaceholder.typicode.com/posts/1`,
            headers: this.headers
        });
    }
}

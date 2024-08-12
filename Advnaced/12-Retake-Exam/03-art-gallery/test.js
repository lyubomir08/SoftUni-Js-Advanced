describe('artGallery', function () {
    describe("addArtwork", () => {
        it("should add artwork with valid inputs", () => {
            const result = artGallery.addArtwork("Starry Night", "30 x 40", "Van Gogh");
            expect(result).to.equal("Artwork added successfully: 'Starry Night' by Van Gogh with dimensions 30 x 40.");
        });

        it("should throw an error when title is not a string", () => {
            expect(() => artGallery.addArtwork(123, "30 x 40", "Van Gogh")).to.throw("Invalid Information!");
        });

        it("should throw an error when artist is not a string", () => {
            expect(() => artGallery.addArtwork("Starry Night", "30 x 40", 123)).to.throw("Invalid Information!");
        });

        it("should throw an error when dimensions are in an invalid format", () => {
            expect(() => artGallery.addArtwork("Starry Night", "30 by 40", "Van Gogh")).to.throw("Invalid Dimensions!");
        });

        it("should throw an error when artist is not allowed", () => {
            expect(() => artGallery.addArtwork("Starry Night", "30 x 40", "Rembrandt")).to.throw("This artist is not allowed in the gallery!");
        });
    });

    describe("calculateCosts", () => {
        it("should calculate the total cost without a sponsor", () => {
            const result = artGallery.calculateCosts(500, 300, false);
            expect(result).to.equal("Exhibition and insurance costs are 800$.");
        });

        it("should calculate the total cost with a sponsor", () => {
            const result = artGallery.calculateCosts(500, 300, true);
            expect(result).to.equal("Exhibition and insurance costs are 720$, reduced by 10% with the help of a donation from your sponsor.");
        });

        it("should throw an error when exhibitionCosts is not a number", () => {
            expect(() => artGallery.calculateCosts("500", 300, true)).to.throw("Invalid Information!");
        });

        it("should throw an error when insuranceCosts is not a number", () => {
            expect(() => artGallery.calculateCosts(500, "300", true)).to.throw("Invalid Information!");
        });

        it("should throw an error when sponsor is not a boolean", () => {
            expect(() => artGallery.calculateCosts(500, 300, "true")).to.throw("Invalid Information!");
        });

        it("should throw an error when exhibitionCosts is negative", () => {
            expect(() => artGallery.calculateCosts(-500, 300, true)).to.throw("Invalid Information!");
        });

        it("should throw an error when insuranceCosts is negative", () => {
            expect(() => artGallery.calculateCosts(500, -300, true)).to.throw("Invalid Information!");
        });
    });

    describe("organizeExhibits", () => {
        it("should organize exhibits with valid input", () => {
            const result = artGallery.organizeExhibits(100, 20);
            expect(result).to.equal("You have 20 display spaces with 5 artworks in each space.");
        });

        it("should return message when artworks per space is less than 5", () => {
            const result = artGallery.organizeExhibits(20, 10);
            expect(result).to.equal("There are only 2 artworks in each display space, you can add more artworks.");
        });

        it("should throw an error when artworksCount is not a number", () => {
            expect(() => artGallery.organizeExhibits("100", 20)).to.throw("Invalid Information!");
        });

        it("should throw an error when displaySpacesCount is not a number", () => {
            expect(() => artGallery.organizeExhibits(100, "20")).to.throw("Invalid Information!");
        });

        it("should throw an error when artworksCount is negative", () => {
            expect(() => artGallery.organizeExhibits(-100, 20)).to.throw("Invalid Information!");
        });

        it("should throw an error when displaySpacesCount is negative", () => {
            expect(() => artGallery.organizeExhibits(100, -20)).to.throw("Invalid Information!");
        });
    });
});
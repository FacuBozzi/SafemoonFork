const {expect} = require("chai")
const chai = require("chai")
const BN = require("bn.js")
const { ethers } = require("hardhat")

chai.use(require("chai-bn")(BN))

describe("Safetoken Integration Test", function() {

    let safeToken
    let owner
    let addr1

    beforeEach(async function() {
        const SafeToken = await ethers.getContractFactory("EveTokenized");
        safeToken = await SafeToken.deploy();
        
        [owner, addr1] = await ethers.getSigners();
        await safeToken.deployed();

    })

    describe("Deployment", async () => {
        it("should set the right owner", async () => {
            expect(await safeToken.owner()).to.equal(owner.address);
        })

        it("should assign the total supply to the owner", async () => {
            const ownerBalance = await token.balanceOf(owner.address);
            expect(await safeToken.totalSupply()).to.equal(ownerBalance);
        })
    })

    describe("Transactions", async () => {
        it("Should transfer tokens between accounts", async () => {
            await safeToken.connect(addr1).transfer(addr2.address, 50)
            const addr1Balance = await safeToken.balanceOf(addr1.address);
            expect(addr1Balance).to.equal(50)
        })

        it("should fail if sender doesnt have enough tokens", async () => {
            const initialBalanceOwner = await safeToken.balanceOf(owner.address);
            
            await expect(
                token
                .connect(addr1)
                .transfer(owner.address, 1)
                )
                .to.be.revertedWith("SafeToken: transfer amount exceeds balance")
                
                expect(
                    await token.balanceOf(owner.address)
                    )
                    .to
                    .equal(initialBalanceOwner)
                })

        it("should update balances after transfer", async () => { 
            const initialBalanceOwner = await safeToken.balanceOf(owner.address);   
        })

        await safeToken.transfer(addr1.address, 100)
        await safeToken.transfer(addr2.address, 50)

        const finalOwnerBalance = await safeToken.balanceOf(owner.address);
        expect(finalOwnerBalance).to.equal(initialBalanceOwner - 150);

        const addr1Balance = await token.balanceOf(addr1.address)
        expect(addr1Balance).to.equal(100)

        const addr2Balance = await token.balanceOf(addr2.address)
        expect(addr2Balance).to.equal(50)
    })
    // it("Should succesfully deploy", function() {
    //     // this.timeout(10000)
    //     console.log("deployed!")
    // })

    // it("Should deploy with 20B supply", async function() {
    //     const balance = await safeToken.balanceOf(owner.address)
    //     const intBalance = parseInt(balance)
    //     expect(intBalance == 20000000000, "Failed")
    // })

    // it("Should let you send tokens to another address", async function() {
    //     await safeToken.transfer(addr1.address, ethers.utils.parseEther("100") )
    //     expect(await safeToken.balanceOf(addr1.address)).to.equal(ethers.utils.parseEther("100"))
    // })
})
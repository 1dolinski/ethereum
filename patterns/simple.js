//http://solidity.readthedocs.org/en/latest/introduction-to-smart-contracts.html
contract SimpleStorage {
    uint storedData;
    function set(uint x) {
        storedData = x;
    }
    function get() constant returns (uint retVal) {
        return storedData;
    }
}

// Think of uint storedData as slot in database
// Owning contract can get and set the value

// allows anyone to store a single number that is accessible by anyone and writable by anyone

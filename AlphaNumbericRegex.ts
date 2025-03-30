function testAlphabet(character: string): boolean{
    return /^[a-zA-Z0-9]+$/.test(character);
}

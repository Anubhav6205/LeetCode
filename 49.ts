function groupAnagrams(strs: string[]): string[][] {
    let mp= new Map<string,Array<string>>();
    strs.forEach((s)=>{
    let key = s.split('').sort((a,b)=>a.localeCompare(b)).join('');
    if(!mp.has(key))
    {
        mp.set(key,[]);
    }
    mp.get(key)!.push(s);
    })

   return Array.from(mp.values())

    
};
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
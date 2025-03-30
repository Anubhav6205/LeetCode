/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: any) {

    return function(n: number): number {
        return bs(1,n);
        
    };

    function bs(lb: number, ub: number)
{
    if(lb > ub) return Number.MAX_SAFE_INTEGER;
    let mid = Math.ceil((lb+ub)/2);
    if(mid-1>0 && ub-lb === 1 && isBadVersion(mid-1)) mid = mid-1;
    if(isBadVersion(mid))
    {
        return Math.min(mid,bs(lb,mid-1));
    }
    return bs(mid+1,ub);

}
    
};


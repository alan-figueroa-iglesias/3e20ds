Array.prototype.merge_Sort = function () 
{
    if (this.length <= 1) 
        return this;
    
    var x = parseInt(this.length / 2);
    var a = this.slice(0, x).merge_Sort();
    var b = this.slice(x, this.length).merge_Sort();
    
    var merge = function (a, b) 
    {
        var array = [];

        while (a.length > 0 && b.length > 0) 
        {
            array.push((a[0] <= b[0]) ? a.shift() : b.shift());
        }
        return array.concat(a).concat(b);
    };

    return merge(a, b);
};

var a = [53, 34, 21, 60, 9, 92];
console.log(a.merge_Sort());
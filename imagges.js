var mayimage = document.querySelector('img');
mayimage.onclick  = function()
{
    var maysorce=mayimage.getAttribute('src');
    if(maysorce==='images/image1.jpg')
    {
        mayimage.setAttribute('src','images/image2.jpg');
    }
    else if(maysorce==='images/image2.jpg')
    {
        mayimage.setAttribute('src','images/image3.jpg');
    }
    else if(maysorce==='images/image3.jpg')
    {
        mayimage.setAttribute('src','images/image1.jpg');
    }
    
}
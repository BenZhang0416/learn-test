function loadImg(src) {
    const promise = new Promise((resolve, reject) => {
        const img = document.createElement('img');
        img.onload = function() {
            resolve(img);
        }
        img.onerror = function() {
            const error = new Error(`图片加载失败， url为:${src}`)
            reject(error);
        }
        img.src = src;
    });
    return promise;
}

const url = 'https://image.baidu.com/search/detail?tn=baiduimagedetail&word=城市建筑摄影专题&album_tab=建筑&album_id=7&ie=utf-8&fr=albumsdetail&cs=1595072465,3644073269&pi=3977&pn=0&ic=0&objurl=https%3A%2F%2Ft7.baidu.com%2Fit%2Fu%3D1595072465%2C3644073269%26fm%3D193%26f%3DGIF'
loadImg(url).then(img => {
    console.log('img', img)
}).catch(e => {
    console.log(e)
})

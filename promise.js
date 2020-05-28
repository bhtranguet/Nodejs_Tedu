function a(value) {
    return new Promise((resolve, reject) => {
        if (value >= 0){
            resolve(value);
        } else reject('err: value < 0')
    })
}

function b(value) {
    return new Promise((resolve, reject) => {
        if(value >= 5) {
            resolve(value);
        } else {
            reject('err: value nhỏ hơn 5')
        }
    })
}

a(6)
.then(value => b(value))
.then(value => {console.log(value)})
.catch(err => console.log(err));

async function exec(value) {
    try {
        const aResult = await a(value);
        const bResult = await b(aResult);
        if(bResult >= 5) console.log(bResult);
    } catch(err) {
        console.log(err);
    }
}

exec(-1);
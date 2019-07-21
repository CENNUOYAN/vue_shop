import Mock from 'mockjs';

 const vehicle = Mock.mock(
 '/api/vehicle','post', (req, res) =>{
    return  {
        code:200,
        data:[{
            id:1,
            licNumber:'陕A79898',
            color:1,
            buyTime:'2017-04-01'
 
        },{
            id:1,
            licNumber:'陕A79898',
            color:1,
            buyTime:'2017-04-01'
 
        }],
        message:'查询成功'
    }
} )
 const user = Mock.mock(
 '/api/user','get', (req, res) =>{
    return  {
        code:200,
        data:{
            "id|+1":1,
           sex:1,
            age:25,
            createTime:'2017-04-01'
        },
        message:'查询成功'
    }
} )
//图片分类
Mock.mock('/api/getimgcategory','get',{
    code: 200,
    message: [
        {
            id: 1,
            title: "全部"
        },
        {
            id: 2,
            title: "家居生活"
        },
        {
            id: 3,
            title: "时尚设计"
        },
        {
            id: 4,
            title: "古风美女"
        },
        {
            id: 5,
            title: "美丽风景"
        }
    ]
})
//图列列表
Mock.mock('/api/getimages/1','get', {
    code:200,
    message: [
        {
            id: 1,
            title: '@csentence',
            img_url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=341898504,564734148&fm=27&gp=0.jpg',
            zhaiyao: '@csentence@csentence@csentence@csentence@csentence'
        },
        {
            id: 2,
            title: '@csentence',
            img_url: 'http://img3.imgtn.bdimg.com/it/u=3698759436,3924516577&fm=26&gp=0.jpg',
            zhaiyao: '@csentence@csentence@csentence@csentence@csentence'
        },
        {
            id: 3,
            title: '@csentence',
            img_url: 'http://img1.imgtn.bdimg.com/it/u=3842170534,2787149677&fm=26&gp=0.jpg',
            zhaiyao: '@csentence@csentence@csentence@csentence@csentence'
        },
        {
            id: 4,
            title: '@csentence',
            img_url: 'http://img3.imgtn.bdimg.com/it/u=3698759436,3924516577&fm=26&gp=0.jpg',
            zhaiyao: '@csentence@csentence@csentence@csentence@csentence'
        },
        {
            id: 5,
            title: '@csentence',
            img_url: 'http://img1.imgtn.bdimg.com/it/u=1117889665,3501122926&fm=15&gp=0.jpg',
            zhaiyao: '@csentence@csentence@csentence@csentence@csentence'
        },
        {
            id: 6,
            title: '@csentence',
            img_url: 'http://img2.imgtn.bdimg.com/it/u=2527594116,876551552&fm=26&gp=0.jpg',
            zhaiyao: '@csentence@csentence@csentence@csentence@csentence'
        },
        {
            id: 7,
            title: '@csentence',
            img_url: 'http://img1.imgtn.bdimg.com/it/u=4258793631,1900040606&fm=11&gp=0.jpg',
            zhaiyao: '@csentence@csentence@csentence@csentence@csentence'
        },
        {
            id: 8,
            title: '@csentence',
            img_url: 'http://img5.imgtn.bdimg.com/it/u=2982427453,2268480602&fm=26&gp=0.jpg',
            zhaiyao: '@csentence@csentence@csentence@csentence@csentence'
        },
        {
            id: 9,
            title: '@csentence',
            img_url: 'http://img2.imgtn.bdimg.com/it/u=4085579794,3310442186&fm=26&gp=0.jpg',
            zhaiyao: '@csentence@csentence@csentence@csentence@csentence'
        },
        {
            id: 10,
            title: '@csentence',
            img_url: 'http://img2.imgtn.bdimg.com/it/u=3973131455,3910120447&fm=15&gp=0.jpg',
            zhaiyao: '@csentence@csentence@csentence@csentence@csentence'
        },
        {
            id: 11,
            title: '@csentence',
            img_url: 'http://img3.imgtn.bdimg.com/it/u=3172047094,86565245&fm=26&gp=0.jpg',
            zhaiyao: '@csentence@csentence@csentence@csentence@csentence'
        },
        {
            id: 12,
            title: '@csentence',
            img_url: 'http://img2.imgtn.bdimg.com/it/u=3769361260,4040046272&fm=26&gp=0.jpg',
            zhaiyao: '@csentence@csentence@csentence@csentence@csentence'
        },
        {
            id: 13,
            title: '@csentence',
            img_url: 'http://img5.imgtn.bdimg.com/it/u=3427380161,2045291956&fm=26&gp=0.jpg',
            zhaiyao: '@csentence@csentence@csentence@csentence@csentence'
        },
        {
            id: 14,
            title: '@csentence',
            img_url: 'http://img4.imgtn.bdimg.com/it/u=2540608086,1678235140&fm=26&gp=0.jpg',
            zhaiyao: '@csentence@csentence@csentence@csentence@csentence'
        },
        {
            id: 15,
            title: '@csentence',
            img_url: 'http://img1.imgtn.bdimg.com/it/u=1838851149,2751198158&fm=26&gp=0.jpg',
            zhaiyao: '@csentence@csentence@csentence@csentence@csentence'
        },
        {
            id: 16,
            title: '@csentence',
            img_url: 'http://img1.imgtn.bdimg.com/it/u=1258266227,1220501054&fm=26&gp=0.jpg',
            zhaiyao: '@csentence@csentence@csentence@csentence@csentence'
        },
        {
            id: 17,
            title: '@csentence',
            img_url: 'http://img4.imgtn.bdimg.com/it/u=282424332,2073075370&fm=26&gp=0.jpg',
            zhaiyao: '@csentence@csentence@csentence@csentence@csentence'
        },
        {
            id: 18,
            title: '@csentence',
            img_url: 'http://img0.imgtn.bdimg.com/it/u=3598119811,1872194559&fm=26&gp=0.jpg',
            zhaiyao: '@csentence@csentence@csentence@csentence@csentence'
        },
        {
            id: 19,
            title: '@csentence',
            img_url: 'http://img0.imgtn.bdimg.com/it/u=2214855456,1298633868&fm=26&gp=0.jpg',
            zhaiyao: '@csentence@csentence@csentence@csentence@csentence'
        },
        {
            id: 20,
            title: '@csentence',
            img_url: 'http://img1.imgtn.bdimg.com/it/u=3765546655,3335406694&fm=26&gp=0.jpg',
            zhaiyao: '@csentence@csentence@csentence@csentence@csentence'
        }
    ]
    }
)
Mock.mock('/api/getimages/2','get', {
    code:200,
    message: [
        {
            id: 1,
            title: '@csentence',
            img_url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=341898504,564734148&fm=27&gp=0.jpg',
            zhaiyao: '@csentence@csentence@csentence@csentence@csentence'
        },
        {
            id: 2,
            title: '@csentence',
            img_url: 'http://img3.imgtn.bdimg.com/it/u=3698759436,3924516577&fm=26&gp=0.jpg',
            zhaiyao: '@csentence@csentence@csentence@csentence@csentence'
        },
        {
            id: 3,
            title: '@csentence',
            img_url: 'http://img1.imgtn.bdimg.com/it/u=3842170534,2787149677&fm=26&gp=0.jpg',
            zhaiyao: '@csentence@csentence@csentence@csentence@csentence'
        },
        {
            id: 4,
            title: '@csentence',
            img_url: 'http://img3.imgtn.bdimg.com/it/u=3698759436,3924516577&fm=26&gp=0.jpg',
            zhaiyao: '@csentence@csentence@csentence@csentence@csentence'
        },
        {
            id: 5,
            title: '@csentence',
            img_url: 'http://img1.imgtn.bdimg.com/it/u=1117889665,3501122926&fm=15&gp=0.jpg',
            zhaiyao: '@csentence@csentence@csentence@csentence@csentence'
        }
    ]
    }
)
Mock.mock('/api/getimages/3','get', {
    code:200,
    message: [
        {
            id: 6,
            title: '@csentence',
            img_url: 'http://img2.imgtn.bdimg.com/it/u=2527594116,876551552&fm=26&gp=0.jpg',
            zhaiyao: '@csentence@csentence@csentence@csentence@csentence'
        },
        {
            id: 7,
            title: '@csentence',
            img_url: 'http://img1.imgtn.bdimg.com/it/u=4258793631,1900040606&fm=11&gp=0.jpg',
            zhaiyao: '@csentence@csentence@csentence@csentence@csentence'
        },
        {
            id: 8,
            title: '@csentence',
            img_url: 'http://img5.imgtn.bdimg.com/it/u=2982427453,2268480602&fm=26&gp=0.jpg',
            zhaiyao: '@csentence@csentence@csentence@csentence@csentence'
        },
        {
            id: 9,
            title: '@csentence',
            img_url: 'http://img2.imgtn.bdimg.com/it/u=4085579794,3310442186&fm=26&gp=0.jpg',
            zhaiyao: '@csentence@csentence@csentence@csentence@csentence'
        },
        {
            id: 10,
            title: '@csentence',
            img_url: 'http://img2.imgtn.bdimg.com/it/u=3973131455,3910120447&fm=15&gp=0.jpg',
            zhaiyao: '@csentence@csentence@csentence@csentence@csentence'
        }
    ]
    }
)
Mock.mock('/api/getimages/4','get', {
    code:200,
    message: [
        {
            id: 11,
            title: '@csentence',
            img_url: 'http://img3.imgtn.bdimg.com/it/u=3172047094,86565245&fm=26&gp=0.jpg',
            zhaiyao: '@csentence@csentence@csentence@csentence@csentence'
        },
        {
            id: 12,
            title: '@csentence',
            img_url: 'http://img2.imgtn.bdimg.com/it/u=3769361260,4040046272&fm=26&gp=0.jpg',
            zhaiyao: '@csentence@csentence@csentence@csentence@csentence'
        },
        {
            id: 13,
            title: '@csentence',
            img_url: 'http://img5.imgtn.bdimg.com/it/u=3427380161,2045291956&fm=26&gp=0.jpg',
            zhaiyao: '@csentence@csentence@csentence@csentence@csentence'
        },
        {
            id: 14,
            title: '@csentence',
            img_url: 'http://img4.imgtn.bdimg.com/it/u=2540608086,1678235140&fm=26&gp=0.jpg',
            zhaiyao: '@csentence@csentence@csentence@csentence@csentence'
        },
        {
            id: 15,
            title: '@csentence',
            img_url: 'http://img1.imgtn.bdimg.com/it/u=1838851149,2751198158&fm=26&gp=0.jpg',
            zhaiyao: '@csentence@csentence@csentence@csentence@csentence'
        }
    ]
    }
)
Mock.mock('/api/getimages/5','get', {
    code:200,
    message: [
        {
            id: 16,
            title: '@csentence',
            img_url: 'http://img1.imgtn.bdimg.com/it/u=1258266227,1220501054&fm=26&gp=0.jpg',
            zhaiyao: '@csentence@csentence@csentence@csentence@csentence'
        },
        {
            id: 17,
            title: '@csentence',
            img_url: 'http://img4.imgtn.bdimg.com/it/u=282424332,2073075370&fm=26&gp=0.jpg',
            zhaiyao: '@csentence@csentence@csentence@csentence@csentence'
        },
        {
            id: 18,
            title: '@csentence',
            img_url: 'http://img0.imgtn.bdimg.com/it/u=3598119811,1872194559&fm=26&gp=0.jpg',
            zhaiyao: '@csentence@csentence@csentence@csentence@csentence'
        },
        {
            id: 19,
            title: '@csentence',
            img_url: 'http://img0.imgtn.bdimg.com/it/u=2214855456,1298633868&fm=26&gp=0.jpg',
            zhaiyao: '@csentence@csentence@csentence@csentence@csentence'
        },
        {
            id: 20,
            title: '@csentence',
            img_url: 'http://img1.imgtn.bdimg.com/it/u=3765546655,3335406694&fm=26&gp=0.jpg',
            zhaiyao: '@csentence@csentence@csentence@csentence@csentence'
        }
    ]
    }
)
//图片详细
Mock.mock('/api/getimageInfo/1','get', {
    code:200,
    message: [
        {
            id: 1,
            title: '@csentence',
            add_time: '@datetime',
            content: '@cparagraph@cparagraph@cparagraph'
        }
    ]
    }
)
Mock.mock('/api/getthumimages/1','get', {
    code:200,
    message: [
        {
            src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=341898504,564734148&fm=27&gp=0.jpg'
        },
        {
            src: 'http://img3.imgtn.bdimg.com/it/u=3698759436,3924516577&fm=26&gp=0.jpg'
        },
        {
            src: 'http://img1.imgtn.bdimg.com/it/u=3842170534,2787149677&fm=26&gp=0.jpg'
        },
        {
            src: 'http://img3.imgtn.bdimg.com/it/u=3698759436,3924516577&fm=26&gp=0.jpg'
        },
        {
            src: 'http://img1.imgtn.bdimg.com/it/u=1117889665,3501122926&fm=15&gp=0.jpg'
        }
    ]
    }
)
Mock.mock('/api/getimageInfo/2','get', {
    code:200,
    message: [
        {
            id: 2,
            title: '@csentence',
            add_time: '@datetime',
            content: '@cparagraph@cparagraph@cparagraph'
        }
    ]
    }
)
Mock.mock('/api/getthumimages/2','get', {
    code:200,
    message: [
        {
            src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=341898504,564734148&fm=27&gp=0.jpg'
        },
        {
            src: 'http://img3.imgtn.bdimg.com/it/u=3698759436,3924516577&fm=26&gp=0.jpg'
        },
        {
            src: 'http://img1.imgtn.bdimg.com/it/u=3842170534,2787149677&fm=26&gp=0.jpg'
        },
        {
            src: 'http://img3.imgtn.bdimg.com/it/u=3698759436,3924516577&fm=26&gp=0.jpg'
        },
        {
            src: 'http://img1.imgtn.bdimg.com/it/u=1117889665,3501122926&fm=15&gp=0.jpg'
        }
    ]
    }
)
Mock.mock('/api/getimageInfo/3','get', {
    code:200,
    message: [
        {
            id: 3,
            title: '@csentence',
            add_time: '@datetime',
            content: '@cparagraph@cparagraph@cparagraph'
        }
    ]
    }
)
Mock.mock('/api/getthumimages/3','get', {
    code:200,
    message: [
        {
            src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=341898504,564734148&fm=27&gp=0.jpg'
        },
        {
            src: 'http://img3.imgtn.bdimg.com/it/u=3698759436,3924516577&fm=26&gp=0.jpg'
        },
        {
            src: 'http://img1.imgtn.bdimg.com/it/u=3842170534,2787149677&fm=26&gp=0.jpg'
        },
        {
            src: 'http://img3.imgtn.bdimg.com/it/u=3698759436,3924516577&fm=26&gp=0.jpg'
        },
        {
            src: 'http://img1.imgtn.bdimg.com/it/u=1117889665,3501122926&fm=15&gp=0.jpg'
        }
    ]
    }
)
Mock.mock('/api/getimageInfo/4','get', {
    code:200,
    message: [
        {
            id: 4,
            title: '@csentence',
            add_time: '@datetime',
            content: '@cparagraph@cparagraph@cparagraph'
        }
    ]
    }
)
Mock.mock('/api/getthumimages/4','get', {
    code:200,
    message: [
        {
            src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=341898504,564734148&fm=27&gp=0.jpg'
        },
        {
            src: 'http://img3.imgtn.bdimg.com/it/u=3698759436,3924516577&fm=26&gp=0.jpg'
        },
        {
            src: 'http://img1.imgtn.bdimg.com/it/u=3842170534,2787149677&fm=26&gp=0.jpg'
        },
        {
            src: 'http://img3.imgtn.bdimg.com/it/u=3698759436,3924516577&fm=26&gp=0.jpg'
        },
        {
            src: 'http://img1.imgtn.bdimg.com/it/u=1117889665,3501122926&fm=15&gp=0.jpg'
        }
    ]
    }
)
Mock.mock('/api/getimageInfo/5','get', {
    code:200,
    message: [
        {
            id: 1,
            title: '@csentence',
            add_time: '@datetime',
            content: '@cparagraph@cparagraph@cparagraph'
        }
    ]
    }
)
Mock.mock('/api/getthumimages/5','get', {
    code:200,
    message: [
        {
            src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=341898504,564734148&fm=27&gp=0.jpg'
        },
        {
            src: 'http://img3.imgtn.bdimg.com/it/u=3698759436,3924516577&fm=26&gp=0.jpg'
        },
        {
            src: 'http://img1.imgtn.bdimg.com/it/u=3842170534,2787149677&fm=26&gp=0.jpg'
        },
        {
            src: 'http://img3.imgtn.bdimg.com/it/u=3698759436,3924516577&fm=26&gp=0.jpg'
        },
        {
            src: 'http://img1.imgtn.bdimg.com/it/u=1117889665,3501122926&fm=15&gp=0.jpg'
        }
    ]
    }
)
Mock.mock('/api/getimageInfo/6','get', {
    code:200,
    message: [
        {
            id: 6,
            title: '@csentence',
            add_time: '@datetime',
            content: '@cparagraph@cparagraph@cparagraph'
        }
    ]
    }
)
Mock.mock('/api/getthumimages/6','get', {
    code:200,
    message: [
        {
            src: 'http://img2.imgtn.bdimg.com/it/u=2527594116,876551552&fm=26&gp=0.jpg'
        },
        {
            src: 'http://img1.imgtn.bdimg.com/it/u=4258793631,1900040606&fm=11&gp=0.jpg'
        },
        {
            src: 'http://img5.imgtn.bdimg.com/it/u=2982427453,2268480602&fm=26&gp=0.jpg'
        },
        {
            src: 'http://img3.imgtn.bdimg.com/it/u=3698759436,3924516577&fm=26&gp=0.jpg'
        },
        {
            src: 'http://img2.imgtn.bdimg.com/it/u=3973131455,3910120447&fm=15&gp=0.jpg'
        }
    ]
    }
)
Mock.mock('/api/getimageInfo/7','get', {
    code:200,
    message: [
        {
            id: 7,
            title: '@csentence',
            add_time: '@datetime',
            content: '@cparagraph@cparagraph@cparagraph'
        }
    ]
    }
)
Mock.mock('/api/getthumimages/7','get', {
    code:200,
    message: [
        {
            src: 'http://img2.imgtn.bdimg.com/it/u=2527594116,876551552&fm=26&gp=0.jpg'
        },
        {
            src: 'http://img1.imgtn.bdimg.com/it/u=4258793631,1900040606&fm=11&gp=0.jpg'
        },
        {
            src: 'http://img5.imgtn.bdimg.com/it/u=2982427453,2268480602&fm=26&gp=0.jpg'
        },
        {
            src: 'http://img3.imgtn.bdimg.com/it/u=3698759436,3924516577&fm=26&gp=0.jpg'
        },
        {
            src: 'http://img2.imgtn.bdimg.com/it/u=3973131455,3910120447&fm=15&gp=0.jpg'
        }
    ]
    }
)
Mock.mock('/api/getimageInfo/8','get', {
    code:200,
    message: [
        {
            id: 8,
            title: '@csentence',
            add_time: '@datetime',
            content: '@cparagraph@cparagraph@cparagraph'
        }
    ]
    }
)
Mock.mock('/api/getthumimages/8','get', {
    code:200,
    message: [
        {
            src: 'http://img2.imgtn.bdimg.com/it/u=2527594116,876551552&fm=26&gp=0.jpg'
        },
        {
            src: 'http://img1.imgtn.bdimg.com/it/u=4258793631,1900040606&fm=11&gp=0.jpg'
        },
        {
            src: 'http://img5.imgtn.bdimg.com/it/u=2982427453,2268480602&fm=26&gp=0.jpg'
        },
        {
            src: 'http://img3.imgtn.bdimg.com/it/u=3698759436,3924516577&fm=26&gp=0.jpg'
        },
        {
            src: 'http://img2.imgtn.bdimg.com/it/u=3973131455,3910120447&fm=15&gp=0.jpg'
        }
    ]
    }
)
Mock.mock('/api/getimageInfo/9','get', {
    code:200,
    message: [
        {
            id: 9,
            title: '@csentence',
            add_time: '@datetime',
            content: '@cparagraph@cparagraph@cparagraph'
        }
    ]
    }
)
Mock.mock('/api/getthumimages/9','get', {
    code:200,
    message: [
        {
            src: 'http://img2.imgtn.bdimg.com/it/u=2527594116,876551552&fm=26&gp=0.jpg'
        },
        {
            src: 'http://img1.imgtn.bdimg.com/it/u=4258793631,1900040606&fm=11&gp=0.jpg'
        },
        {
            src: 'http://img5.imgtn.bdimg.com/it/u=2982427453,2268480602&fm=26&gp=0.jpg'
        },
        {
            src: 'http://img3.imgtn.bdimg.com/it/u=3698759436,3924516577&fm=26&gp=0.jpg'
        },
        {
            src: 'http://img2.imgtn.bdimg.com/it/u=3973131455,3910120447&fm=15&gp=0.jpg'
        }
    ]
    }
)
Mock.mock('/api/getimageInfo/10','get', {
    code:200,
    message: [
        {
            id: 10,
            title: '@csentence',
            add_time: '@datetime',
            content: '@cparagraph@cparagraph@cparagraph'
        }
    ]
    }
)
Mock.mock('/api/getthumimages/10','get', {
    code:200,
    message: [
        {
            src: 'http://img2.imgtn.bdimg.com/it/u=2527594116,876551552&fm=26&gp=0.jpg'
        },
        {
            src: 'http://img1.imgtn.bdimg.com/it/u=4258793631,1900040606&fm=11&gp=0.jpg'
        },
        {
            src: 'http://img5.imgtn.bdimg.com/it/u=2982427453,2268480602&fm=26&gp=0.jpg'
        },
        {
            src: 'http://img3.imgtn.bdimg.com/it/u=3698759436,3924516577&fm=26&gp=0.jpg'
        },
        {
            src: 'http://img2.imgtn.bdimg.com/it/u=3973131455,3910120447&fm=15&gp=0.jpg'
        }
    ]
    }
)
Mock.mock('/api/getimageInfo/11','get', {
    code:200,
    message: [
        {
            id: 11,
            title: '@csentence',
            add_time: '@datetime',
            content: '@cparagraph@cparagraph@cparagraph'
        }
    ]
    }
)
Mock.mock('/api/getthumimages/11','get', {
    code:200,
    message: [
        {
            src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=341898504,564734148&fm=27&gp=0.jpg'
        },
        {
            src: 'http://img3.imgtn.bdimg.com/it/u=3698759436,3924516577&fm=26&gp=0.jpg'
        },
        {
            src: 'http://img1.imgtn.bdimg.com/it/u=3842170534,2787149677&fm=26&gp=0.jpg'
        },
        {
            src: 'http://img3.imgtn.bdimg.com/it/u=3698759436,3924516577&fm=26&gp=0.jpg'
        },
        {
            src: 'http://img1.imgtn.bdimg.com/it/u=1117889665,3501122926&fm=15&gp=0.jpg'
        }
    ]
    }
)
Mock.mock('/api/getimageInfo/12','get', {
    code:200,
    message: [
        {
            id: 12,
            title: '@csentence',
            add_time: '@datetime',
            content: '@cparagraph@cparagraph@cparagraph'
        }
    ]
    }
)
Mock.mock('/api/getthumimages/12','get', {
    code:200,
    message: [
        {
            src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=341898504,564734148&fm=27&gp=0.jpg'
        },
        {
            src: 'http://img3.imgtn.bdimg.com/it/u=3698759436,3924516577&fm=26&gp=0.jpg'
        },
        {
            src: 'http://img1.imgtn.bdimg.com/it/u=3842170534,2787149677&fm=26&gp=0.jpg'
        },
        {
            src: 'http://img3.imgtn.bdimg.com/it/u=3698759436,3924516577&fm=26&gp=0.jpg'
        },
        {
            src: 'http://img1.imgtn.bdimg.com/it/u=1117889665,3501122926&fm=15&gp=0.jpg'
        }
    ]
    }
)
Mock.mock('/api/getimageInfo/13','get', {
    code:200,
    message: [
        {
            id: 13,
            title: '@csentence',
            add_time: '@datetime',
            content: '@cparagraph@cparagraph@cparagraph'
        }
    ]
    }
)
Mock.mock('/api/getthumimages/13','get', {
    code:200,
    message: [
        {
            src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=341898504,564734148&fm=27&gp=0.jpg'
        },
        {
            src: 'http://img3.imgtn.bdimg.com/it/u=3698759436,3924516577&fm=26&gp=0.jpg'
        },
        {
            src: 'http://img1.imgtn.bdimg.com/it/u=3842170534,2787149677&fm=26&gp=0.jpg'
        },
        {
            src: 'http://img3.imgtn.bdimg.com/it/u=3698759436,3924516577&fm=26&gp=0.jpg'
        },
        {
            src: 'http://img1.imgtn.bdimg.com/it/u=1117889665,3501122926&fm=15&gp=0.jpg'
        }
    ]
    }
)
Mock.mock('/api/getimageInfo/14','get', {
    code:200,
    message: [
        {
            id: 14,
            title: '@csentence',
            add_time: '@datetime',
            content: '@cparagraph@cparagraph@cparagraph'
        }
    ]
    }
)
Mock.mock('/api/getthumimages/14','get', {
    code:200,
    message: [
        {
            src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=341898504,564734148&fm=27&gp=0.jpg'
        },
        {
            src: 'http://img3.imgtn.bdimg.com/it/u=3698759436,3924516577&fm=26&gp=0.jpg'
        },
        {
            src: 'http://img1.imgtn.bdimg.com/it/u=3842170534,2787149677&fm=26&gp=0.jpg'
        },
        {
            src: 'http://img3.imgtn.bdimg.com/it/u=3698759436,3924516577&fm=26&gp=0.jpg'
        },
        {
            src: 'http://img1.imgtn.bdimg.com/it/u=1117889665,3501122926&fm=15&gp=0.jpg'
        }
    ]
    }
)
Mock.mock('/api/getimageInfo/15','get', {
    code:200,
    message: [
        {
            id: 15,
            title: '@csentence',
            add_time: '@datetime',
            content: '@cparagraph@cparagraph@cparagraph'
        }
    ]
    }
)
Mock.mock('/api/getthumimages/15','get', {
    code:200,
    message: [
        {
            src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=341898504,564734148&fm=27&gp=0.jpg'
        },
        {
            src: 'http://img3.imgtn.bdimg.com/it/u=3698759436,3924516577&fm=26&gp=0.jpg'
        },
        {
            src: 'http://img1.imgtn.bdimg.com/it/u=3842170534,2787149677&fm=26&gp=0.jpg'
        },
        {
            src: 'http://img3.imgtn.bdimg.com/it/u=3698759436,3924516577&fm=26&gp=0.jpg'
        },
        {
            src: 'http://img1.imgtn.bdimg.com/it/u=1117889665,3501122926&fm=15&gp=0.jpg'
        }
    ]
    }
)
Mock.mock('/api/getimageInfo/16','get', {
    code:200,
    message: [
        {
            id: 16,
            title: '@csentence',
            add_time: '@datetime',
            content: '@cparagraph@cparagraph@cparagraph'
        }
    ]
    }
)
Mock.mock('/api/getthumimages/16','get', {
    code:200,
    message: [
        {
            src: 'http://img2.imgtn.bdimg.com/it/u=2527594116,876551552&fm=26&gp=0.jpg'
        },
        {
            src: 'http://img1.imgtn.bdimg.com/it/u=4258793631,1900040606&fm=11&gp=0.jpg'
        },
        {
            src: 'http://img5.imgtn.bdimg.com/it/u=2982427453,2268480602&fm=26&gp=0.jpg'
        },
        {
            src: 'http://img3.imgtn.bdimg.com/it/u=3698759436,3924516577&fm=26&gp=0.jpg'
        },
        {
            src: 'http://img2.imgtn.bdimg.com/it/u=3973131455,3910120447&fm=15&gp=0.jpg'
        }
    ]
    }
)
Mock.mock('/api/getimageInfo/17','get', {
    code:200,
    message: [
        {
            id: 17,
            title: '@csentence',
            add_time: '@datetime',
            content: '@cparagraph@cparagraph@cparagraph'
        }
    ]
    }
)
Mock.mock('/api/getthumimages/17','get', {
    code:200,
    message: [
        {
            src: 'http://img2.imgtn.bdimg.com/it/u=2527594116,876551552&fm=26&gp=0.jpg'
        },
        {
            src: 'http://img1.imgtn.bdimg.com/it/u=4258793631,1900040606&fm=11&gp=0.jpg'
        },
        {
            src: 'http://img5.imgtn.bdimg.com/it/u=2982427453,2268480602&fm=26&gp=0.jpg'
        },
        {
            src: 'http://img3.imgtn.bdimg.com/it/u=3698759436,3924516577&fm=26&gp=0.jpg'
        },
        {
            src: 'http://img2.imgtn.bdimg.com/it/u=3973131455,3910120447&fm=15&gp=0.jpg'
        }
    ]
    }
)
Mock.mock('/api/getimageInfo/18','get', {
    code:200,
    message: [
        {
            id: 18,
            title: '@csentence',
            add_time: '@datetime',
            content: '@cparagraph@cparagraph@cparagraph'
        }
    ]
    }
)
Mock.mock('/api/getthumimages/18','get', {
    code:200,
    message: [
        {
            src: 'http://img2.imgtn.bdimg.com/it/u=2527594116,876551552&fm=26&gp=0.jpg'
        },
        {
            src: 'http://img1.imgtn.bdimg.com/it/u=4258793631,1900040606&fm=11&gp=0.jpg'
        },
        {
            src: 'http://img5.imgtn.bdimg.com/it/u=2982427453,2268480602&fm=26&gp=0.jpg'
        },
        {
            src: 'http://img3.imgtn.bdimg.com/it/u=3698759436,3924516577&fm=26&gp=0.jpg'
        },
        {
            src: 'http://img2.imgtn.bdimg.com/it/u=3973131455,3910120447&fm=15&gp=0.jpg'
        }
    ]
    }
)
Mock.mock('/api/getimageInfo/19','get', {
    code:200,
    message: [
        {
            id: 19,
            title: '@csentence',
            add_time: '@datetime',
            content: '@cparagraph@cparagraph@cparagraph'
        }
    ]
    }
)
Mock.mock('/api/getthumimages/19','get', {
    code:200,
    message: [
        {
            src: 'http://img2.imgtn.bdimg.com/it/u=2527594116,876551552&fm=26&gp=0.jpg'
        },
        {
            src: 'http://img1.imgtn.bdimg.com/it/u=4258793631,1900040606&fm=11&gp=0.jpg'
        },
        {
            src: 'http://img5.imgtn.bdimg.com/it/u=2982427453,2268480602&fm=26&gp=0.jpg'
        },
        {
            src: 'http://img3.imgtn.bdimg.com/it/u=3698759436,3924516577&fm=26&gp=0.jpg'
        },
        {
            src: 'http://img2.imgtn.bdimg.com/it/u=3973131455,3910120447&fm=15&gp=0.jpg'
        }
    ]
    }
)
Mock.mock('/api/getimageInfo/20','get', {
    code:200,
    message: [
        {
            id: 20,
            title: '@csentence',
            add_time: '@datetime',
            content: '@cparagraph@cparagraph@cparagraph'
        }
    ]
    }
)
Mock.mock('/api/getthumimages/20','get', {
    code:200,
    message: [
        {
            src: 'http://img2.imgtn.bdimg.com/it/u=2527594116,876551552&fm=26&gp=0.jpg'
        },
        {
            src: 'http://img1.imgtn.bdimg.com/it/u=4258793631,1900040606&fm=11&gp=0.jpg'
        },
        {
            src: 'http://img5.imgtn.bdimg.com/it/u=2982427453,2268480602&fm=26&gp=0.jpg'
        },
        {
            src: 'http://img3.imgtn.bdimg.com/it/u=3698759436,3924516577&fm=26&gp=0.jpg'
        },
        {
            src: 'http://img2.imgtn.bdimg.com/it/u=3973131455,3910120447&fm=15&gp=0.jpg'
        }
    ]
    }
)
//评论
Mock.mock('/api/getcomments','get', {
    code:200,
    'message|0-20':[{
        'user_name': "匿名用户", 
        "add_time": '@datetime',
        "content": "@csentence",
    }]
    }
)
Mock.mock('/api/postcomment','post', (req, res) =>{
    // console.log("res:"+res)
    
    console.log("req:"+JSON.parse(req.body).content)
    
    return  {   //响应的内容
        code:200,
        'message|0-20':[{
            
            'user_name': "匿名用户", 
            "add_time": '@datetime',
            "content": "@csentence",
        }],
        message:'查询成功'
    }
} 
)
//新闻列表
Mock.mock('/api/getnewslist','get', {
    code:200,
    'message|10':[{
        'id|+1': "@increment()", 
        "title": "@cparagraph()",
        "add_time": '@datetime',
        "zhaiyao": "@cparagraph()",
        "click|0-100": 0,
        "img_url": "@image('200x200', '#888')" 
    }]
    }
)
//新闻详细信息
Mock.mock('/api/getnew/1','get', {
    code:200,
    'message':[{
        'id|+1': "@increment()", 
        "title": "@ctitle@ctitle@ctitle",
        "add_time": '@datetime',
        "click|0-100": 0,
        "content": "@cparagraph()@cparagraph()@cparagraph()@cparagraph()@cparagraph()@cparagraph()",
    }]
    }
)
Mock.mock('/api/getnew/2','get', {
    code:200,
    'message':[{
        'id|+1': "@increment()", 
        "title": "@ctitle@ctitle@ctitle",
        "add_time": '@datetime',
        "click|0-100": 0,
        "content": "@cparagraph()@cparagraph()@cparagraph()@cparagraph()@cparagraph()@cparagraph()",
    }]
    }
)
Mock.mock('/api/getnew/3','get', {
    code:200,
    'message':[{
        'id|+1': "@increment()", 
        "title": "@ctitle@ctitle@ctitle",
        "add_time": '@datetime',
        "click|0-100": 0,
        "content": "@cparagraph()@cparagraph()@cparagraph()@cparagraph()@cparagraph()@cparagraph()",
    }]
    }
)
Mock.mock('/api/getnew/4','get', {
    code:200,
    'message':[{
        'id|+1': "@increment()", 
        "title": "@ctitle@ctitle@ctitle",
        "add_time": '@datetime',
        "click|0-100": 0,
        "content": "@cparagraph()@cparagraph()@cparagraph()@cparagraph()@cparagraph()@cparagraph()",
    }]
    }
)
Mock.mock('/api/getnew/5','get', {
    code:200,
    'message':[{
        'id|+1': "@increment()", 
        "title": "@ctitle@ctitle@ctitle",
        "add_time": '@datetime',
        "click|0-100": 0,
        "content": "@cparagraph()@cparagraph()@cparagraph()@cparagraph()@cparagraph()@cparagraph()",
    }]
    }
)
Mock.mock('/api/getnew/6','get', {
    code:200,
    'message':[{
        'id|+1': "@increment()", 
        "title": "@ctitle@ctitle@ctitle",
        "add_time": '@datetime',
        "click|0-100": 0,
        "content": "@cparagraph()@cparagraph()@cparagraph()@cparagraph()@cparagraph()@cparagraph()",
    }]
    }
)
Mock.mock('/api/getnew/7','get', {
    code:200,
    'message':[{
        'id|+1': "@increment()", 
        "title": "@ctitle@ctitle@ctitle",
        "add_time": '@datetime',
        "click|0-100": 0,
        "content": "@cparagraph()@cparagraph()@cparagraph()@cparagraph()@cparagraph()@cparagraph()",
    }]
    }
)
Mock.mock('/api/getnew/8','get', {
    code:200,
    'message':[{
        'id|+1': "@increment()", 
        "title": "@ctitle@ctitle@ctitle",
        "add_time": '@datetime',
        "click|0-100": 0,
        "content": "@cparagraph()@cparagraph()@cparagraph()@cparagraph()@cparagraph()@cparagraph()",
    }]
    }
)
Mock.mock('/api/getnew/9','get', {
    code:200,
    'message':[{
        'id|+1': "@increment()", 
        "title": "@ctitle@ctitle@ctitle",
        "add_time": '@datetime',
        "click|0-100": 0,
        "content": "@cparagraph()@cparagraph()@cparagraph()@cparagraph()@cparagraph()@cparagraph()",
    }]
    }
)
Mock.mock('/api/getnew/10','get', {
    code:200,
    'message':[{
        'id|+1': "@increment()", 
        "title": "@ctitle@ctitle@ctitle",
        "add_time": '@datetime',
        "click|0-100": 0,
        "content": "@cparagraph()@cparagraph()@cparagraph()@cparagraph()@cparagraph()@cparagraph()",
    }]
    }
)
Mock.mock('/api/getnew/11','get', {
    code:200,
    'message':[{
        'id|+1': "@increment()", 
        "title": "@ctitle@ctitle@ctitle",
        "add_time": '@datetime',
        "click|0-100": 0,
        "content": "@cparagraph()@cparagraph()@cparagraph()@cparagraph()@cparagraph()@cparagraph()",
    }]
    }
)
Mock.mock('/api/getnew/12','get', {
    code:200,
    'message':[{
        'id|+1': "@increment()", 
        "title": "@ctitle@ctitle@ctitle",
        "add_time": '@datetime',
        "click|0-100": 0,
        "content": "@cparagraph()@cparagraph()@cparagraph()@cparagraph()@cparagraph()@cparagraph()",
    }]
    }
)
Mock.mock('/api/getnew/13','get', {
    code:200,
    'message':[{
        'id|+1': "@increment()", 
        "title": "@ctitle@ctitle@ctitle",
        "add_time": '@datetime',
        "click|0-100": 0,
        "content": "@cparagraph()@cparagraph()@cparagraph()@cparagraph()@cparagraph()@cparagraph()",
    }]
    }
)
Mock.mock('/api/getnew/14','get', {
    code:200,
    'message':[{
        'id|+1': "@increment()", 
        "title": "@ctitle@ctitle@ctitle",
        "add_time": '@datetime',
        "click|0-100": 0,
        "content": "@cparagraph()@cparagraph()@cparagraph()@cparagraph()@cparagraph()@cparagraph()",
    }]
    }
)
Mock.mock('/api/getnew/15','get', {
    code:200,
    'message':[{
        'id|+1': "@increment()", 
        "title": "@ctitle@ctitle@ctitle",
        "add_time": '@datetime',
        "click|0-100": 0,
        "content": "@cparagraph()@cparagraph()@cparagraph()@cparagraph()@cparagraph()@cparagraph()",
    }]
    }
)
Mock.mock('/api/getnew/16','get', {
    code:200,
    'message':[{
        'id|+1': "@increment()", 
        "title": "@ctitle@ctitle@ctitle",
        "add_time": '@datetime',
        "click|0-100": 0,
        "content": "@cparagraph()@cparagraph()@cparagraph()@cparagraph()@cparagraph()@cparagraph()",
    }]
    }
)
Mock.mock('/api/getnew/17','get', {
    code:200,
    'message':[{
        'id|+1': "@increment()", 
        "title": "@ctitle@ctitle@ctitle",
        "add_time": '@datetime',
        "click|0-100": 0,
        "content": "@cparagraph()@cparagraph()@cparagraph()@cparagraph()@cparagraph()@cparagraph()",
    }]
    }
)
Mock.mock('/api/getnew/18','get', {
    code:200,
    'message':[{
        'id|+1': "@increment()", 
        "title": "@ctitle@ctitle@ctitle",
        "add_time": '@datetime',
        "click|0-100": 0,
        "content": "@cparagraph()@cparagraph()@cparagraph()@cparagraph()@cparagraph()@cparagraph()",
    }]
    }
)
Mock.mock('/api/getnew/19','get', {
    code:200,
    'message':[{
        'id|+1': "@increment()", 
        "title": "@ctitle@ctitle@ctitle",
        "add_time": '@datetime',
        "click|0-100": 0,
        "content": "@cparagraph()@cparagraph()@cparagraph()@cparagraph()@cparagraph()@cparagraph()",
    }]
    }
)
Mock.mock('/api/getnew/20','get', {
    code:200,
    'message':[{
        'id|+1': "@increment()", 
        "title": "@ctitle@ctitle@ctitle",
        "add_time": '@datetime',
        "click|0-100": 0,
        "content": "@cparagraph()@cparagraph()@cparagraph()@cparagraph()@cparagraph()@cparagraph()",
    }]
    }
)
Mock.mock('/api/getnew/21','get', {
    code:200,
    'message':[{
        'id|+1': "@increment()", 
        "title": "@ctitle@ctitle@ctitle",
        "add_time": '@datetime',
        "click|0-100": 0,
        "content": "@cparagraph()@cparagraph()@cparagraph()@cparagraph()@cparagraph()@cparagraph()",
    }]
    }
)
Mock.mock('/api/getnew/22','get', {
    code:200,
    'message':[{
        'id|+1': "@increment()", 
        "title": "@ctitle@ctitle@ctitle",
        "add_time": '@datetime',
        "click|0-100": 0,
        "content": "@cparagraph()@cparagraph()@cparagraph()@cparagraph()@cparagraph()@cparagraph()",
    }]
    }
)
Mock.mock('/api/getnew/23','get', {
    code:200,
    'message':[{
        'id|+1': "@increment()", 
        "title": "@ctitle@ctitle@ctitle",
        "add_time": '@datetime',
        "click|0-100": 0,
        "content": "@cparagraph()@cparagraph()@cparagraph()@cparagraph()@cparagraph()@cparagraph()",
    }]
    }
)
Mock.mock('/api/getnew/24','get', {
    code:200,
    'message':[{
        'id|+1': "@increment()", 
        "title": "@ctitle@ctitle@ctitle",
        "add_time": '@datetime',
        "click|0-100": 0,
        "content": "@cparagraph()@cparagraph()@cparagraph()@cparagraph()@cparagraph()@cparagraph()",
    }]
    }
)
Mock.mock('/api/getnew/25','get', {
    code:200,
    'message':[{
        'id|+1': "@increment()", 
        "title": "@ctitle@ctitle@ctitle",
        "add_time": '@datetime',
        "click|0-100": 0,
        "content": "@cparagraph()@cparagraph()@cparagraph()@cparagraph()@cparagraph()@cparagraph()",
    }]
    }
)
Mock.mock('/api/getnew/26','get', {
    code:200,
    'message':[{
        'id|+1': "@increment()", 
        "title": "@ctitle@ctitle@ctitle",
        "add_time": '@datetime',
        "click|0-100": 0,
        "content": "@cparagraph()@cparagraph()@cparagraph()@cparagraph()@cparagraph()@cparagraph()",
    }]
    }
)
Mock.mock('/api/getnew/27','get', {
    code:200,
    'message':[{
        'id|+1': "@increment()", 
        "title": "@ctitle@ctitle@ctitle",
        "add_time": '@datetime',
        "click|0-100": 0,
        "content": "@cparagraph()@cparagraph()@cparagraph()@cparagraph()@cparagraph()@cparagraph()",
    }]
    }
)
Mock.mock('/api/getnew/28','get', {
    code:200,
    'message':[{
        'id|+1': "@increment()", 
        "title": "@ctitle@ctitle@ctitle",
        "add_time": '@datetime',
        "click|0-100": 0,
        "content": "@cparagraph()@cparagraph()@cparagraph()@cparagraph()@cparagraph()@cparagraph()",
    }]
    }
)
Mock.mock('/api/getnew/29','get', {
    code:200,
    'message':[{
        'id|+1': "@increment()", 
        "title": "@ctitle@ctitle@ctitle",
        "add_time": '@datetime',
        "click|0-100": 0,
        "content": "@cparagraph()@cparagraph()@cparagraph()@cparagraph()@cparagraph()@cparagraph()",
    }]
    }
)
Mock.mock('/api/getnew/30','get', {
    code:200,
    'message':[{
        'id|+1': "@increment()", 
        "title": "@ctitle@ctitle@ctitle",
        "add_time": '@datetime',
        "click|0-100": 0,
        "content": "@cparagraph()@cparagraph()@cparagraph()@cparagraph()@cparagraph()@cparagraph()",
    }]
    }
)
//商品列表
Mock.mock('/api/productList','get', {
    code:200,
    'productlist|6':[{
        'id|+1': "@increment()", 
        "title|1":['JULI 19夏| 重磅限量 婚礼裙 纯色蕾丝睫毛直筒显瘦短袖连衣裙','【KiKi法代】sandro 19春夏 V领系带中长款连衣裙 R30240E SHAYNA',
    '【文洛法代】maje19春夏 蕾丝花边镂空束腰中长款连衣裙 ROSERAY','A姐法国代购 maje 19春夏 仙女超仙森系甜美polo领短袖修身连衣裙','打底衫衣服中长款韩版短袖百搭T恤140斤上衣夏秋女外穿中长款','秋天上衣服圆领初秋季春秋装新款女装纯棉长袖泡泡袖打底衫t恤','新款2019春装美女字母白色长袖t恤中长款破洞学生打底衫女装上衣'],
        "sell_price|100-200":50,
        "market_price":300,
        "content": "@cparagraph()",
        "createTime":'@datetime',
        "img_url": "@image('200x200', '#894FC4')" ,
        "stock_quantity": "@integer(50, 500)"   
    }]
    }
   )
//商品详细信息
Mock.mock('/api/product/1','get', {
    code:200,
    'message':[{
        "title|1":['JULI 19夏| 重磅限量 婚礼裙 纯色蕾丝睫毛直筒显瘦短袖连衣裙','【KiKi法代】sandro 19春夏 V领系带中长款连衣裙 R30240E SHAYNA',
        '【文洛法代】maje19春夏 蕾丝花边镂空束腰中长款连衣裙 ROSERAY','A姐法国代购 maje 19春夏 仙女超仙森系甜美polo领短袖修身连衣裙','打底衫衣服中长款韩版短袖百搭T恤140斤上衣夏秋女外穿中长款','秋天上衣服圆领初秋季春秋装新款女装纯棉长袖泡泡袖打底衫t恤','新款2019春装美女字母白色长袖t恤中长款破洞学生打底衫女装上衣'],
        "sell_price|5-200":100,
        "market_price":300,
        "content": "@cparagraph()",
        "add_time":'@datetime',
        "img": "@image('200x200')",
        "stock_quantity": "@integer(50, 500)",
        "goods_no": "@id"
    }]
    }  
)
Mock.mock('/api/product/2','get', {
    code:200,
    'message':[{
        "title|1":['JULI 19夏| 重磅限量 婚礼裙 纯色蕾丝睫毛直筒显瘦短袖连衣裙','【KiKi法代】sandro 19春夏 V领系带中长款连衣裙 R30240E SHAYNA',
        '【文洛法代】maje19春夏 蕾丝花边镂空束腰中长款连衣裙 ROSERAY','A姐法国代购 maje 19春夏 仙女超仙森系甜美polo领短袖修身连衣裙','打底衫衣服中长款韩版短袖百搭T恤140斤上衣夏秋女外穿中长款','秋天上衣服圆领初秋季春秋装新款女装纯棉长袖泡泡袖打底衫t恤','新款2019春装美女字母白色长袖t恤中长款破洞学生打底衫女装上衣'],
        "sell_price|5-200":100,
        "market_price":300,
        "content": "@cparagraph()",
        "add_time":'@datetime',
        "img": "@image('200x200')",
        "stock_quantity": "@integer(50, 500)",
        "goods_no": "@id"
    }]
    }  
)
Mock.mock('/api/product/3','get', {
    code:200,
    'message':[{
        "title|1":['JULI 19夏| 重磅限量 婚礼裙 纯色蕾丝睫毛直筒显瘦短袖连衣裙','【KiKi法代】sandro 19春夏 V领系带中长款连衣裙 R30240E SHAYNA',
        '【文洛法代】maje19春夏 蕾丝花边镂空束腰中长款连衣裙 ROSERAY','A姐法国代购 maje 19春夏 仙女超仙森系甜美polo领短袖修身连衣裙','打底衫衣服中长款韩版短袖百搭T恤140斤上衣夏秋女外穿中长款','秋天上衣服圆领初秋季春秋装新款女装纯棉长袖泡泡袖打底衫t恤','新款2019春装美女字母白色长袖t恤中长款破洞学生打底衫女装上衣'],
        "sell_price|5-200":100,
        "market_price":300,
        "content": "@cparagraph()",
        "add_time":'@datetime',
        "img": "@image('200x200')",
        "stock_quantity": "@integer(50, 500)",
        "goods_no": "@id"
    }]
    }  
)
Mock.mock('/api/product/4','get', {
    code:200,
    'message':[{
        "title|1":['JULI 19夏| 重磅限量 婚礼裙 纯色蕾丝睫毛直筒显瘦短袖连衣裙','【KiKi法代】sandro 19春夏 V领系带中长款连衣裙 R30240E SHAYNA',
        '【文洛法代】maje19春夏 蕾丝花边镂空束腰中长款连衣裙 ROSERAY','A姐法国代购 maje 19春夏 仙女超仙森系甜美polo领短袖修身连衣裙','打底衫衣服中长款韩版短袖百搭T恤140斤上衣夏秋女外穿中长款','秋天上衣服圆领初秋季春秋装新款女装纯棉长袖泡泡袖打底衫t恤','新款2019春装美女字母白色长袖t恤中长款破洞学生打底衫女装上衣'],
        "sell_price|5-200":100,
        "market_price":300,
        "content": "@cparagraph()",
        "add_time":'@datetime',
        "img": "@image('200x200')",
        "stock_quantity": "@integer(50, 500)",
        "goods_no": "@id"
    }]
    }  
)
Mock.mock('/api/product/5','get', {
    code:200,
    'message':[{
        "title|1":['JULI 19夏| 重磅限量 婚礼裙 纯色蕾丝睫毛直筒显瘦短袖连衣裙','【KiKi法代】sandro 19春夏 V领系带中长款连衣裙 R30240E SHAYNA',
        '【文洛法代】maje19春夏 蕾丝花边镂空束腰中长款连衣裙 ROSERAY','A姐法国代购 maje 19春夏 仙女超仙森系甜美polo领短袖修身连衣裙','打底衫衣服中长款韩版短袖百搭T恤140斤上衣夏秋女外穿中长款','秋天上衣服圆领初秋季春秋装新款女装纯棉长袖泡泡袖打底衫t恤','新款2019春装美女字母白色长袖t恤中长款破洞学生打底衫女装上衣'],
        "sell_price|5-200":100,
        "market_price":300,
        "content": "@cparagraph()",
        "add_time":'@datetime',
        "img": "@image('200x200')",
        "stock_quantity": "@integer(50, 500)",
        "goods_no": "@id"
    }]
    }  
)
Mock.mock('/api/product/6','get', {
    code:200,
    'message':[{
        "title|1":['JULI 19夏| 重磅限量 婚礼裙 纯色蕾丝睫毛直筒显瘦短袖连衣裙','【KiKi法代】sandro 19春夏 V领系带中长款连衣裙 R30240E SHAYNA',
        '【文洛法代】maje19春夏 蕾丝花边镂空束腰中长款连衣裙 ROSERAY','A姐法国代购 maje 19春夏 仙女超仙森系甜美polo领短袖修身连衣裙','打底衫衣服中长款韩版短袖百搭T恤140斤上衣夏秋女外穿中长款','秋天上衣服圆领初秋季春秋装新款女装纯棉长袖泡泡袖打底衫t恤','新款2019春装美女字母白色长袖t恤中长款破洞学生打底衫女装上衣'],
        "sell_price|5-200":100,
        "market_price":300,
        "content": "@cparagraph()",
        "add_time":'@datetime',
        "img": "@image('200x200')",
        "stock_quantity": "@integer(50, 500)",
        "goods_no": "@id"
    }]
    }  
)
Mock.mock('/api/product/7','get', {
    code:200,
    'message':[{
        "title|1":['JULI 19夏| 重磅限量 婚礼裙 纯色蕾丝睫毛直筒显瘦短袖连衣裙','【KiKi法代】sandro 19春夏 V领系带中长款连衣裙 R30240E SHAYNA',
        '【文洛法代】maje19春夏 蕾丝花边镂空束腰中长款连衣裙 ROSERAY','A姐法国代购 maje 19春夏 仙女超仙森系甜美polo领短袖修身连衣裙','打底衫衣服中长款韩版短袖百搭T恤140斤上衣夏秋女外穿中长款','秋天上衣服圆领初秋季春秋装新款女装纯棉长袖泡泡袖打底衫t恤','新款2019春装美女字母白色长袖t恤中长款破洞学生打底衫女装上衣'],
        "sell_price|5-200":100,
        "market_price":300,
        "content": "@cparagraph()",
        "add_time":'@datetime',
        "img": "@image('200x200')",
        "stock_quantity": "@integer(50, 500)",
        "goods_no": "@id"
    }]
    }  
)
Mock.mock('/api/product/8','get', {
    code:200,
    'message':[{
        "title|1":['JULI 19夏| 重磅限量 婚礼裙 纯色蕾丝睫毛直筒显瘦短袖连衣裙','【KiKi法代】sandro 19春夏 V领系带中长款连衣裙 R30240E SHAYNA',
        '【文洛法代】maje19春夏 蕾丝花边镂空束腰中长款连衣裙 ROSERAY','A姐法国代购 maje 19春夏 仙女超仙森系甜美polo领短袖修身连衣裙','打底衫衣服中长款韩版短袖百搭T恤140斤上衣夏秋女外穿中长款','秋天上衣服圆领初秋季春秋装新款女装纯棉长袖泡泡袖打底衫t恤','新款2019春装美女字母白色长袖t恤中长款破洞学生打底衫女装上衣'],
        "sell_price|5-200":100,
        "market_price":300,
        "content": "@cparagraph()",
        "add_time":'@datetime',
        "img": "@image('200x200')",
        "stock_quantity": "@integer(50, 500)",
        "goods_no": "@id"
    }]
    }  
)
Mock.mock('/api/product/9','get', {
    code:200,
    'message':[{
        "title|1":['JULI 19夏| 重磅限量 婚礼裙 纯色蕾丝睫毛直筒显瘦短袖连衣裙','【KiKi法代】sandro 19春夏 V领系带中长款连衣裙 R30240E SHAYNA',
        '【文洛法代】maje19春夏 蕾丝花边镂空束腰中长款连衣裙 ROSERAY','A姐法国代购 maje 19春夏 仙女超仙森系甜美polo领短袖修身连衣裙','打底衫衣服中长款韩版短袖百搭T恤140斤上衣夏秋女外穿中长款','秋天上衣服圆领初秋季春秋装新款女装纯棉长袖泡泡袖打底衫t恤','新款2019春装美女字母白色长袖t恤中长款破洞学生打底衫女装上衣'],
        "sell_price|5-200":100,
        "market_price":300,
        "content": "@cparagraph()",
        "add_time":'@datetime',
        "img": "@image('200x200')",
        "stock_quantity": "@integer(50, 500)",
        "goods_no": "@id"
    }]
    }
    
)
Mock.mock('/api/product/10','get', {
    code:200,
    'message':[{
        "title|1":['JULI 19夏| 重磅限量 婚礼裙 纯色蕾丝睫毛直筒显瘦短袖连衣裙','【KiKi法代】sandro 19春夏 V领系带中长款连衣裙 R30240E SHAYNA',
        '【文洛法代】maje19春夏 蕾丝花边镂空束腰中长款连衣裙 ROSERAY','A姐法国代购 maje 19春夏 仙女超仙森系甜美polo领短袖修身连衣裙','打底衫衣服中长款韩版短袖百搭T恤140斤上衣夏秋女外穿中长款','秋天上衣服圆领初秋季春秋装新款女装纯棉长袖泡泡袖打底衫t恤','新款2019春装美女字母白色长袖t恤中长款破洞学生打底衫女装上衣'],
        "sell_price|5-200":100,
        "market_price":300,
        "content": "@cparagraph()",
        "add_time":'@datetime',
        "img": "@image('200x200')",
        "stock_quantity": "@integer(50, 500)",
        "goods_no": "@id"
    }]
    }  
)
Mock.mock('/api/product/11','get', {
    code:200,
    'message':[{
        "title|1":['JULI 19夏| 重磅限量 婚礼裙 纯色蕾丝睫毛直筒显瘦短袖连衣裙','【KiKi法代】sandro 19春夏 V领系带中长款连衣裙 R30240E SHAYNA',
        '【文洛法代】maje19春夏 蕾丝花边镂空束腰中长款连衣裙 ROSERAY','A姐法国代购 maje 19春夏 仙女超仙森系甜美polo领短袖修身连衣裙','打底衫衣服中长款韩版短袖百搭T恤140斤上衣夏秋女外穿中长款','秋天上衣服圆领初秋季春秋装新款女装纯棉长袖泡泡袖打底衫t恤','新款2019春装美女字母白色长袖t恤中长款破洞学生打底衫女装上衣'],
        "sell_price|5-200":100,
        "market_price":300,
        "content": "@cparagraph()",
        "add_time":'@datetime',
        "img": "@image('200x200')",
        "stock_quantity": "@integer(50, 500)",
        "goods_no": "@id"
    }]
    }  
)
Mock.mock('/api/product/12','get', {
    code:200,
    'message':[{
        "title|1":['JULI 19夏| 重磅限量 婚礼裙 纯色蕾丝睫毛直筒显瘦短袖连衣裙','【KiKi法代】sandro 19春夏 V领系带中长款连衣裙 R30240E SHAYNA',
        '【文洛法代】maje19春夏 蕾丝花边镂空束腰中长款连衣裙 ROSERAY','A姐法国代购 maje 19春夏 仙女超仙森系甜美polo领短袖修身连衣裙','打底衫衣服中长款韩版短袖百搭T恤140斤上衣夏秋女外穿中长款','秋天上衣服圆领初秋季春秋装新款女装纯棉长袖泡泡袖打底衫t恤','新款2019春装美女字母白色长袖t恤中长款破洞学生打底衫女装上衣'],
        "sell_price|5-200":100,
        "market_price":300,
        "content": "@cparagraph()",
        "add_time":'@datetime',
        "img": "@image('200x200')",
        "stock_quantity": "@integer(50, 500)",
        "goods_no": "@id"
    }]
    }  
)
Mock.mock('/api/product/13','get', {
    code:200,
    'message':[{
        "title|1":['JULI 19夏| 重磅限量 婚礼裙 纯色蕾丝睫毛直筒显瘦短袖连衣裙','【KiKi法代】sandro 19春夏 V领系带中长款连衣裙 R30240E SHAYNA',
        '【文洛法代】maje19春夏 蕾丝花边镂空束腰中长款连衣裙 ROSERAY','A姐法国代购 maje 19春夏 仙女超仙森系甜美polo领短袖修身连衣裙','打底衫衣服中长款韩版短袖百搭T恤140斤上衣夏秋女外穿中长款','秋天上衣服圆领初秋季春秋装新款女装纯棉长袖泡泡袖打底衫t恤','新款2019春装美女字母白色长袖t恤中长款破洞学生打底衫女装上衣'],
        "sell_price|5-200":100,
        "market_price":300,
        "content": "@cparagraph()",
        "add_time":'@datetime',
        "img": "@image('200x200')",
        "stock_quantity": "@integer(50, 500)",
        "goods_no": "@id"
    }]
    }  
)
Mock.mock('/api/product/14','get', {
    code:200,
    'message':[{
        "title|1":['JULI 19夏| 重磅限量 婚礼裙 纯色蕾丝睫毛直筒显瘦短袖连衣裙','【KiKi法代】sandro 19春夏 V领系带中长款连衣裙 R30240E SHAYNA',
        '【文洛法代】maje19春夏 蕾丝花边镂空束腰中长款连衣裙 ROSERAY','A姐法国代购 maje 19春夏 仙女超仙森系甜美polo领短袖修身连衣裙','打底衫衣服中长款韩版短袖百搭T恤140斤上衣夏秋女外穿中长款','秋天上衣服圆领初秋季春秋装新款女装纯棉长袖泡泡袖打底衫t恤','新款2019春装美女字母白色长袖t恤中长款破洞学生打底衫女装上衣'],
        "sell_price|5-200":100,
        "market_price":300,
        "content": "@cparagraph()",
        "add_time":'@datetime',
        "img": "@image('200x200')",
        "stock_quantity": "@integer(50, 500)",
        "goods_no": "@id"
    }]
    }  
)
Mock.mock('/api/product/15','get', {
    code:200,
    'message':[{
        "title|1":['JULI 19夏| 重磅限量 婚礼裙 纯色蕾丝睫毛直筒显瘦短袖连衣裙','【KiKi法代】sandro 19春夏 V领系带中长款连衣裙 R30240E SHAYNA',
        '【文洛法代】maje19春夏 蕾丝花边镂空束腰中长款连衣裙 ROSERAY','A姐法国代购 maje 19春夏 仙女超仙森系甜美polo领短袖修身连衣裙','打底衫衣服中长款韩版短袖百搭T恤140斤上衣夏秋女外穿中长款','秋天上衣服圆领初秋季春秋装新款女装纯棉长袖泡泡袖打底衫t恤','新款2019春装美女字母白色长袖t恤中长款破洞学生打底衫女装上衣'],
        "sell_price|5-200":100,
        "market_price":300,
        "content": "@cparagraph()",
        "add_time":'@datetime',
        "img": "@image('200x200')",
        "stock_quantity": "@integer(50, 500)",
        "goods_no": "@id"
    }]
    }  
)
Mock.mock('/api/product/16','get', {
    code:200,
    'message':[{
        "title|1":['JULI 19夏| 重磅限量 婚礼裙 纯色蕾丝睫毛直筒显瘦短袖连衣裙','【KiKi法代】sandro 19春夏 V领系带中长款连衣裙 R30240E SHAYNA',
        '【文洛法代】maje19春夏 蕾丝花边镂空束腰中长款连衣裙 ROSERAY','A姐法国代购 maje 19春夏 仙女超仙森系甜美polo领短袖修身连衣裙','打底衫衣服中长款韩版短袖百搭T恤140斤上衣夏秋女外穿中长款','秋天上衣服圆领初秋季春秋装新款女装纯棉长袖泡泡袖打底衫t恤','新款2019春装美女字母白色长袖t恤中长款破洞学生打底衫女装上衣'],
        "sell_price|5-200":100,
        "market_price":300,
        "content": "@cparagraph()",
        "add_time":'@datetime',
        "img": "@image('200x200')",
        "stock_quantity": "@integer(50, 500)",
        "goods_no": "@id"
    }]
    }  
)
Mock.mock('/api/product/17','get', {
    code:200,
    'message':[{
        "title|1":['JULI 19夏| 重磅限量 婚礼裙 纯色蕾丝睫毛直筒显瘦短袖连衣裙','【KiKi法代】sandro 19春夏 V领系带中长款连衣裙 R30240E SHAYNA',
        '【文洛法代】maje19春夏 蕾丝花边镂空束腰中长款连衣裙 ROSERAY','A姐法国代购 maje 19春夏 仙女超仙森系甜美polo领短袖修身连衣裙','打底衫衣服中长款韩版短袖百搭T恤140斤上衣夏秋女外穿中长款','秋天上衣服圆领初秋季春秋装新款女装纯棉长袖泡泡袖打底衫t恤','新款2019春装美女字母白色长袖t恤中长款破洞学生打底衫女装上衣'],
        "sell_price|5-200":100,
        "market_price":300,
        "content": "@cparagraph()",
        "add_time":'@datetime',
        "img": "@image('200x200')",
        "stock_quantity": "@integer(50, 500)",
        "goods_no": "@id"
    }]
    }
    
)
Mock.mock('/api/product/18','get', {
    code:200,
    'message':[{
        "title|1":['JULI 19夏| 重磅限量 婚礼裙 纯色蕾丝睫毛直筒显瘦短袖连衣裙','【KiKi法代】sandro 19春夏 V领系带中长款连衣裙 R30240E SHAYNA',
        '【文洛法代】maje19春夏 蕾丝花边镂空束腰中长款连衣裙 ROSERAY','A姐法国代购 maje 19春夏 仙女超仙森系甜美polo领短袖修身连衣裙','打底衫衣服中长款韩版短袖百搭T恤140斤上衣夏秋女外穿中长款','秋天上衣服圆领初秋季春秋装新款女装纯棉长袖泡泡袖打底衫t恤','新款2019春装美女字母白色长袖t恤中长款破洞学生打底衫女装上衣'],
        "sell_price|5-200":100,
        "market_price":300,
        "content": "@cparagraph()",
        "add_time":'@datetime',
        "img": "@image('200x200')",
        "stock_quantity": "@integer(50, 500)",
        "goods_no": "@id"
    }]
    }  
)
Mock.mock('/api/product/19','get', {
    code:200,
    'message':[{
        "title|1":['JULI 19夏| 重磅限量 婚礼裙 纯色蕾丝睫毛直筒显瘦短袖连衣裙','【KiKi法代】sandro 19春夏 V领系带中长款连衣裙 R30240E SHAYNA',
        '【文洛法代】maje19春夏 蕾丝花边镂空束腰中长款连衣裙 ROSERAY','A姐法国代购 maje 19春夏 仙女超仙森系甜美polo领短袖修身连衣裙','打底衫衣服中长款韩版短袖百搭T恤140斤上衣夏秋女外穿中长款','秋天上衣服圆领初秋季春秋装新款女装纯棉长袖泡泡袖打底衫t恤','新款2019春装美女字母白色长袖t恤中长款破洞学生打底衫女装上衣'],
        "sell_price|5-200":100,
        "market_price":300,
        "content": "@cparagraph()",
        "add_time":'@datetime',
        "img": "@image('200x200')",
        "stock_quantity": "@integer(50, 500)",
        "goods_no": "@id"
    }]
    }  
)
Mock.mock('/api/product/20','get', {
    code:200,
    'message':[{
        "title|1":['JULI 19夏| 重磅限量 婚礼裙 纯色蕾丝睫毛直筒显瘦短袖连衣裙','【KiKi法代】sandro 19春夏 V领系带中长款连衣裙 R30240E SHAYNA',
        '【文洛法代】maje19春夏 蕾丝花边镂空束腰中长款连衣裙 ROSERAY','A姐法国代购 maje 19春夏 仙女超仙森系甜美polo领短袖修身连衣裙','打底衫衣服中长款韩版短袖百搭T恤140斤上衣夏秋女外穿中长款','秋天上衣服圆领初秋季春秋装新款女装纯棉长袖泡泡袖打底衫t恤','新款2019春装美女字母白色长袖t恤中长款破洞学生打底衫女装上衣'],
        "sell_price|5-200":100,
        "market_price":300,
        "content": "@cparagraph()",
        "add_time":'@datetime',
        "img": "@image('200x200')",
        "stock_quantity": "@integer(50, 500)",
        "goods_no": "@id"
    }]
    }  
)
Mock.mock('/api/product/21','get', {
    code:200,
    'message':[{
        "title|1":['JULI 19夏| 重磅限量 婚礼裙 纯色蕾丝睫毛直筒显瘦短袖连衣裙','【KiKi法代】sandro 19春夏 V领系带中长款连衣裙 R30240E SHAYNA',
        '【文洛法代】maje19春夏 蕾丝花边镂空束腰中长款连衣裙 ROSERAY','A姐法国代购 maje 19春夏 仙女超仙森系甜美polo领短袖修身连衣裙','打底衫衣服中长款韩版短袖百搭T恤140斤上衣夏秋女外穿中长款','秋天上衣服圆领初秋季春秋装新款女装纯棉长袖泡泡袖打底衫t恤','新款2019春装美女字母白色长袖t恤中长款破洞学生打底衫女装上衣'],
        "sell_price|5-200":100,
        "market_price":300,
        "content": "@cparagraph()",
        "add_time":'@datetime',
        "img": "@image('200x200')",
        "stock_quantity": "@integer(50, 500)",
        "goods_no": "@id"
    }]
    }  
)
Mock.mock('/api/product/22','get', {
    code:200,
    'message':[{
        "title|1":['JULI 19夏| 重磅限量 婚礼裙 纯色蕾丝睫毛直筒显瘦短袖连衣裙','【KiKi法代】sandro 19春夏 V领系带中长款连衣裙 R30240E SHAYNA',
        '【文洛法代】maje19春夏 蕾丝花边镂空束腰中长款连衣裙 ROSERAY','A姐法国代购 maje 19春夏 仙女超仙森系甜美polo领短袖修身连衣裙','打底衫衣服中长款韩版短袖百搭T恤140斤上衣夏秋女外穿中长款','秋天上衣服圆领初秋季春秋装新款女装纯棉长袖泡泡袖打底衫t恤','新款2019春装美女字母白色长袖t恤中长款破洞学生打底衫女装上衣'],
        "sell_price|5-200":100,
        "market_price":300,
        "content": "@cparagraph()",
        "add_time":'@datetime',
        "img": "@image('200x200')",
        "stock_quantity": "@integer(50, 500)",
        "goods_no": "@id"
    }]
    }  
)
Mock.mock('/api/product/23','get', {
    code:200,
    'message':[{
        "title|1":['JULI 19夏| 重磅限量 婚礼裙 纯色蕾丝睫毛直筒显瘦短袖连衣裙','【KiKi法代】sandro 19春夏 V领系带中长款连衣裙 R30240E SHAYNA',
        '【文洛法代】maje19春夏 蕾丝花边镂空束腰中长款连衣裙 ROSERAY','A姐法国代购 maje 19春夏 仙女超仙森系甜美polo领短袖修身连衣裙','打底衫衣服中长款韩版短袖百搭T恤140斤上衣夏秋女外穿中长款','秋天上衣服圆领初秋季春秋装新款女装纯棉长袖泡泡袖打底衫t恤','新款2019春装美女字母白色长袖t恤中长款破洞学生打底衫女装上衣'],
        "sell_price|5-200":100,
        "market_price":300,
        "content": "@cparagraph()",
        "add_time":'@datetime',
        "img": "@image('200x200')",
        "stock_quantity": "@integer(50, 500)",
        "goods_no": "@id"
    }]
    }  
)
Mock.mock('/api/product/24','get', {
    code:200,
    'message':[{
        "title|1":['JULI 19夏| 重磅限量 婚礼裙 纯色蕾丝睫毛直筒显瘦短袖连衣裙','【KiKi法代】sandro 19春夏 V领系带中长款连衣裙 R30240E SHAYNA',
        '【文洛法代】maje19春夏 蕾丝花边镂空束腰中长款连衣裙 ROSERAY','A姐法国代购 maje 19春夏 仙女超仙森系甜美polo领短袖修身连衣裙','打底衫衣服中长款韩版短袖百搭T恤140斤上衣夏秋女外穿中长款','秋天上衣服圆领初秋季春秋装新款女装纯棉长袖泡泡袖打底衫t恤','新款2019春装美女字母白色长袖t恤中长款破洞学生打底衫女装上衣'],
        "sell_price|5-200":100,
        "market_price":300,
        "content": "@cparagraph()",
        "add_time":'@datetime',
        "img": "@image('200x200')",
        "stock_quantity": "@integer(50, 500)",
        "goods_no": "@id"
    }]
    }  
)
Mock.mock('/api/product/25','get', {
    code:200,
    'message':[{
        "title|1":['JULI 19夏| 重磅限量 婚礼裙 纯色蕾丝睫毛直筒显瘦短袖连衣裙','【KiKi法代】sandro 19春夏 V领系带中长款连衣裙 R30240E SHAYNA',
        '【文洛法代】maje19春夏 蕾丝花边镂空束腰中长款连衣裙 ROSERAY','A姐法国代购 maje 19春夏 仙女超仙森系甜美polo领短袖修身连衣裙','打底衫衣服中长款韩版短袖百搭T恤140斤上衣夏秋女外穿中长款','秋天上衣服圆领初秋季春秋装新款女装纯棉长袖泡泡袖打底衫t恤','新款2019春装美女字母白色长袖t恤中长款破洞学生打底衫女装上衣'],
        "sell_price|5-200":100,
        "market_price":300,
        "content": "@cparagraph()",
        "add_time":'@datetime',
        "img": "@image('200x200')",
        "stock_quantity": "@integer(50, 500)",
        "goods_no": "@id"
    }]
    }
    
)
//轮播图
Mock.mock('/api/getSwipeImages','get', {
    code:200,
    'message|3':[{
        
        "img": "@image('200x200')"    
    }]
    }
    
)
//测试
Mock.mock('http://test.com', {
		    "users|5-10": [{   // 随机生成5到10个数组元素
		        'name': '@cname',  // 中文名称
		        'id|+1': 1,    // 属性值自动加 1，初始值为1
		        'age|18-28': 0,   // 18至28以内随机整数, 0只是用来确定类型
		        'birthday': '@date("yyyy-MM-dd")',  // 日期
		        'city': '@city(true)',   // 中国城市
		    }]
		});

//  export default {Mock}
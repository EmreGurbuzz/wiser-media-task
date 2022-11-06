import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

let instance = axios.create({
    timeout: 1000,
});

let mock = new MockAdapter(instance);
mock.onGet('/posts').reply(200, {
    posts: [
        {
            id: 1,
            from: 'Ekin İçbudak',
            userImage: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2',
            isLiked:false,
            likedFrom: '',
            contentType:'article',
            userComment: "Lorem ipsum dolor sit amet 🤔, consectetur adipiscing elit, sed do @nilsuderici",
            insertDate: '43m',
            job: 'UX Designer',
            sharedFrom: 'spotify',
            postHeader: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d...amet, consectetur adipiscing elit, sed d...',
            postContent: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
            postType: 'video',
            postSource: 'https://images.pexels.com/photos/1193743/pexels-photo-1193743.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&dpr=2',
            tags: ['Arts & Culture', 'Design']
        },
        {
            id: 2,
            from: 'Courtney  Henry',
            userImage: '',
            isLiked:false,
            likedFrom: '',
            contentType:'video',
            insertDate: '43m',
            job: 'Architect',
            sharedFrom: 'aeon.co',
            postHeader: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,',
            postContent: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham',
            postType: 'image',
            postSource: 'https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=300&h=400&dpr=2',
            tags: ['Arts & Culture', 'Design']
        },
        {
            id: 3,
            from: 'Kathryn Murphy',
            userImage: '',
            isLiked:true,
            likedFrom: 'Ekin İçbudak',
            contentType:'podcast',
            insertDate: '43m',
            job: 'Computer Scientist',
            sharedFrom: 'youtube',
            postHeader: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,',
            postContent: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham',
            postType: 'sound',
            postSource: 'https://images.pexels.com/photos/40642/pexels-photo-40642.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
            tags: ['Arts & Culture', 'Design']
        },

    ]
});

export { instance }
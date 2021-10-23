//array of object whcih keeps information  about the candidate
const data=[
    {
        name:'Mohan Yadav',
        age:20,
        city:'kolkata',
        language:'python',
        framework:'django',
        image:'https://randomuser.me/api/portraits/men/10.jpg'
    },
    
    {
        name: 'Shubham Sharma',
        age: 28,
        city: 'Bangalore',
        language: 'JavaScript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/44.jpg'
    },

    {
        name: 'Puja Shaw',
        age: 18,
        city: 'Kolkata',
        language: 'Java',
        framework: 'Flutter',
        image: 'https://randomuser.me/api/portraits/women/29.jpg'
    },

    {
        name: 'Dinesh Rai',
        age: 45,
        city: 'Mumbai',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/men/67.jpg'
    },

    {
        name: 'Rohit Sharma',
        age: 34,
        city: 'Jharkhand',
        language: 'Go',
        framework: 'React Native',
        image: 'https://randomuser.me/api/portraits/men/52.jpg'
    },
    {
        name: 'Kajal Gupta',
        age:25,
        city: 'Gujrat',
        language: 'C++',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/47.jpg'
    },
    {
        name: 'Ritu Jha',
        age: 35,
        city: 'Goa',
        language: 'Javascript',
        framework: 'React',
        image: 'https://randomuser.me/api/portraits/women/89.jpg'
    },
    {
        name: 'Vishal Singh',
        age: 15,
        city: 'Punjab',
        language: 'PhP',
        framework: 'MYsql',
        image: 'https://randomuser.me/api/portraits/men/22.jpg'
    },
    {
        name: 'Komal Jaishwal',
        age: 19,
        city: 'Haryana',
        language: 'C',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/67.jpg'
    }

]

// CV Iterator
function cvIterator(profiles){
    let nextIndex=0;
    return {
        next: function(){
            return nextIndex<profiles.length ?
            {value: profiles[nextIndex++], done: false} :
            {done: true}
        }
    };
}
const candidates = cvIterator(data);

nextCV();
// Button listener for next button
const next = document.getElementById('next');
next.addEventListener('click', nextCV);


function nextCV(){
    const currentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(currentCandidate != undefined){
    image.innerHTML = `<img src='${currentCandidate.image}'>`;
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item"><strong>Name: ${currentCandidate.name}</strong></li>
    <li class="list-group-item"><strong>${currentCandidate.age} years old</strong></li>
    <li class="list-group-item"><strong>Lives in ${currentCandidate.city}</strong></li>
    <li class="list-group-item"><strong>Primarily works on ${currentCandidate.language}</strong></li>
    <li class="list-group-item"><strong>Use ${currentCandidate.framework} framework</strong></li>
  </ul>`;
    }
    else{
        alert('End of candidate applications');
        //resatting the appllication
        window.location.reload();
    }

}
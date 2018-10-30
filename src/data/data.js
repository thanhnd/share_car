import randomID from 'random-id';

const trips = [
    {   
        id: randomID(5, 'aA0'),
        from: "Đà Nẵng",
        to: "Hà Nội",
        driver: "Nguyễn Văn A",
        price: "100.000",
        car: "Toyota",
        carImage: "./img/toyota.jpg",
        time: "26-10-2018  13:00",
        timeLate: "30",
        timeForPickUpGuests: "30",
        numberOfSeats: 7,
        numberOfBookedSeats: 2
    },
    {   
        id: randomID(5, 'aA0'),
        from: "Hải Phòng",
        to: "Đà Nẵng",
        driver: "Nguyễn Văn B",
        price: "200.000",
        car: "Mercedes",
        carImage: "./img/mercedes.jpg",
        time: "28-10-2018  14:00",
        timeLate: "20",
        timeForPickUpGuests: "30",
        numberOfSeats: 7,
        numberOfBookedSeats: 3
    },
    {   
        id: randomID(5, 'aA0'),
        from: "Hồ Chí Minh",
        to: "Nam Định",
        driver: "Nguyễn Văn C",
        price: "120.000",
        car: "Audi",
        carImage: "./img/audi.jpg",
        time: "26-10-2018  13:00",
        timeLate: "10",
        timeForPickUpGuests: "0",
        numberOfSeats: 7,
        numberOfBookedSeats: 0
    },
    {   
        id: randomID(5, 'aA0'),
        from: "Hà Nội",
        to: "Nghệ An",
        driver: "Nguyễn Văn D",
        price: "300.000",
        car: "Toyota",
        carImage: "./img/toyota-2.jpg",
        time: "26-10-2018  13:00",
        timeLate: "10",
        timeForPickUpGuests: "30",
        numberOfSeats: 15,
        numberOfBookedSeats: 5
    },
    {   
        id: randomID(5, 'aA0'),
        from: "Đà Nẵng",
        to: "Hồ Chính Minh",
        driver: "Nguyễn Văn E",
        price: "1.000.000",
        car: "Rolls Royce",
        carImage: "./img/rollsroyce.jpg",
        time: "30-10-2018  15:00",
        timeLate: "30",
        timeForPickUpGuests: "60",
        numberOfSeats: 4,
        numberOfBookedSeats: 2
    },
    {   
        id: randomID(5, 'aA0'),
        from: "Nghệ An",
        to: "Hà Tĩnh",
        driver: "Nguyễn Văn F",
        price: "200.000",
        car: "Hyundai",
        carImage: "./img/hyundai.jpeg",
        time: "29-10-2018  06:00",
        timeLate: "10",
        timeForPickUpGuests: "30",
        numberOfSeats: 7,
        numberOfBookedSeats: 3
    },
]

export default trips;
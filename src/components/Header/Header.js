import { useState, useEffect } from "react"
import { API_URL } from "../../constants/api";
import axios from "axios";

import {
    HeaderImage,
    HeaderContainer,
    HeaderHeading,
    HeaderSearchInput,
    FormCenter,
    HeadingSpan,
} from "./Header.elements";

export default function Header({heading, headingSpan}) {
    const [hotels, setHotels] = useState([]);


    useEffect(() => {
        axios.get(`${API_URL}/hotels`)
        .then(res => {
            setHotels(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    
    let headerSearchBox = document.getElementById("header-search-box");
    let searchResults = document.getElementById("search-results");
    if(headerSearchBox) {
        
        headerSearchBox.addEventListener("keyup", (e) => {
            let hotelList = [];
            console.log(e.target.value)
            searchResults.innerHTML = "";
            hotels.forEach(hotel => {
                if(hotel.hotel_name.toLowerCase().includes(e.target.value.toLowerCase())) {
                    hotelList.push(hotel);
                }
            })
            console.log("hotellist")
            if(hotelList.length > 3) {
                for(let i = 0; i < 3; i++) {
                    searchResults.innerHTML += `
                    <a class="header-search-output" href="/hotels/details?id=${hotelList[i].id}">
                    <img src="${hotelList[i].hotel_images[0].name}" class="header-search-img" />
                    <div class="header-search-grid">
                        <p class="header-search__name">${hotelList[i].hotel_name}</p>
                        <p class="header-search__address">${hotelList[i].hotel_address}</p>
                    </div>
                </a>
                    `;
                }
                hotelList = []
                
            } else {
                hotelList.forEach(hotel => {
                    searchResults.innerHTML += `
                        <a class="header-search-output" href="/hotels/details?id=${hotel.id}">
                            <img src="${hotel.hotel_images[0].name}" class="header-search-img" />
                            <div class="header-search-grid">
                                <p class="header-search__name">${hotel.hotel_name}</p>
                                <p class="header-search__address">${hotel.hotel_address}</p>
                            </div>
                        </a>
                    `;
                })
                hotelList = []
            }
        })
    }
    
    

    return (
        <HeaderImage>
            <HeaderContainer>
                <HeaderHeading>{heading}<HeadingSpan>{headingSpan}</HeadingSpan></HeaderHeading>
                <FormCenter>
                    <HeaderSearchInput id="header-search-box" placeholder="Search for hotels"/>
                    <div id="search-results"></div>
                </FormCenter>
            </HeaderContainer>
        </HeaderImage>
    );

}

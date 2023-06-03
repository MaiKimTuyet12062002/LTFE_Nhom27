
import React, {useState} from "react";

export default function SearchBar({onSearch}) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    return (
        <div>
            <input placeholder="Nhập tên sản phẩm"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch}>Tìm kiếm</button>

        </div>
    );
}

export default function BookList() {
   let bookList = "My Favorite Books";
   let book1 = "https://luckys.ca/cdn/shop/files/howl.jpg?v=1697845743&width=1946";
   let book2 = "https://images.pangobooks.com/images/a784fb37-1238-471e-b05f-0ab97fdeaf41?width=800&quality=85&crop=1%3A1";
   let book3 = "https://www.harpercollins.com/cdn/shop/files/9780063040502_1200x1200.jpg?v=1713018133";

   return (
      <div>
         <h3>{bookList}</h3>
         <img src={book1} alt="Howl's Moving Castle" />
         <img src={book2} alt="Tiger Lily" />
         <img src={book3} alt="Sabriel" />
      </div>      
   );
}
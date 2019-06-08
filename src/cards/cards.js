import React from 'react'
import { Card , Button, CardColumns, CardDeck, Carousel, CarouselItem} from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Cards extends React.Component{
    render(){
        return(
          <Link to="/">
            <div>
              
                <Carousel>
                    <CarouselItem>
                <CardDeck>
                
                <Card style={{ width: '18rem',  marginTop:20 , marginLeft:20} }>
                <Card.Img variant="top" src="https://charujewelsonline.com/wp-content/uploads/2016/10/CJSPS0122-Y.jpg" />
  <Card.Body style={{textAlign:"center"}}>
    <Card.Title><Link to='/pendant/'>Pendant</Link> </Card.Title>
  </Card.Body>
</Card>


<Card style={{ width: '18rem' , marginTop:20 }}>
  <Card.Img variant="top" src="https://5.imimg.com/data5/CH/OU/MY-43025329/ladies-fancy-earring-500x500.jpg" />
  <Card.Body style={{textAlign:"center"}}>
    <Card.Title > <Link to='/earring/'>Earring</Link></Card.Title>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' , marginTop:20 }}>
  <Card.Img variant="top" src="https://www.malabargoldanddiamonds.com/media/catalog/product/cache/5/image/800x800/0dc2d03fe217f8c83829496872af24a0/n/e/neanbva001.jpg" />
  <Card.Body style={{textAlign:"center"}}>
    <Card.Title >Necklace</Card.Title>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' , marginTop:20  }}>
  <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/817ikEuotyL._UX395_.jpg" />
  <Card.Body style={{textAlign:"center"}}>
    <Card.Title >Jhumki</Card.Title>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' , marginTop:20 }}>
  <Card.Img variant="top" src="https://www.sarvadajewels.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/m/-/m-3_1.jpg" />
  <Card.Body style={{textAlign:"center"}}>
    <Card.Title >Mangalsutra</Card.Title>
  </Card.Body>
</Card>

</CardDeck>

</CarouselItem>


<CarouselItem>
<CardDeck>
                <Card style={{ width: '18rem',  marginTop:20 , marginLeft:20} }>
  <Card.Img variant="top" src="https://charujewelsonline.com/wp-content/uploads/2016/10/CJBA0057-Y.jpg" />
  <Card.Body style={{textAlign:"center"}}>
    <Card.Title >Bangles</Card.Title>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' , marginTop:20 }}>
  <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/1102/7446/products/NKX09832-5mm-14K-Gold-Miami-Cuban-Curb-Chain_d86d62b0-a20f-4d9b-8823-e4c9ff7659bf_394x.jpg?v=1540031050" />
  <Card.Body style={{textAlign:"center"}}>
    <Card.Title >Chains</Card.Title>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' , marginTop:20 }}>
  <Card.Img variant="top" src="https://4.imimg.com/data4/ZZ/ZZ/GLADMIN-/https-cdn1-caratlane-com-media-catalog-product-j-n-jn00016-ygp900_1_lar-500x500.jpg" />
  <Card.Body style={{textAlign:"center"}}>
    <Card.Title >Nose Pins</Card.Title>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' , marginTop:20  }}>
  <Card.Img variant="top" src="https://image.brilliantearth.com/media/shape_images/07d7654fad40af0cfede43213c18c7bc_31879ec36695c01698749d8372166ff4_0_.jpg" />
  <Card.Body style={{textAlign:"center"}}>
    <Card.Title >Rings</Card.Title>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' , marginTop:20 }}>
  <Card.Img variant="top" src="https://n3.sdlcdn.com/imgs/h/r/t/Navya-Collection-American-Diamond-Stylish-SDL762776630-1-ade07.jpg" />
  <Card.Body style={{textAlign:"center"}}>
    <Card.Title >AD Watches</Card.Title>
  </Card.Body>
</Card>
</CardDeck>
</CarouselItem>
</Carousel>
            </div>
            </Link>
        )
    }
}
export default Cards;
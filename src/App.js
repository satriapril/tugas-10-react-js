import React, { Component } from 'react';
import "semantic-ui-css/semantic.min.css";
import { Grid, Button, Container, Divider, Flag, Header, Icon, Image, Input, Label } from "semantic-ui-react";

class App extends Component {
  render(){
    return(
      <div>
        <Container fluid>
        <Divider />

        <Grid container>
          <Grid.Column>
            <Flag name="id"/>
          </Grid.Column>
          <Grid.Column>
            <Icon name="angle left"/>
          </Grid.Column>
          <Grid.Column>
            <Icon name="angle right"/>
          </Grid.Column>
          <Grid.Column width={8}>
            <Input fluid type="text" placeholder="Search" icon={<Icon name="star"/>} />
          </Grid.Column>
          <Grid.Column width={4}>
            <Header as="h2">
              <Image circular src="https://react.semantic-ui.com/images/avatar/large/patrick.png"/> Patrick
            </Header>
          </Grid.Column>
        </Grid>

        <Divider horizontal>SELAMAT DATANG!!!!</Divider>

        <Container textAlign="right">
          <Label as="a" color="teal" size="big" tag>
            SPORT
          </Label>
        </Container>

        <br/><br/>
        <Container textAlign="center">
          <p>
            Ducati tengah menunggu sidang Pengadilan Banding FIM tentang komponen aerodinamis. Andai gugatan para rivalnya diterima,
            akankah Ducati akan melanjutkan ke CAS (Pengadilan Arbitrase Olahraga)? Suzuki, Honda, KTM, dan Aprilia memprotes penggunaan
            komponen aero di motor Desmpsedici Andrea Dovizioso dan Danillo Petrucci dalam balapan pertama MotoGP 2019 di Qatar karena dianggap ilegal.
            Pada prosesnya, Dovizioso tampil sebagai pemenang usai mengalahkan Marc Marquez. Keempat tim menyakini, komponenini memiliki
            fungsi aearodinamis, dan menghasilkan downforce, yang membantu motor melesat di trek. Sementara Ducati bersikukuh komponen itu cuma untuk mendinginkan ban
            dan sudah disetujui Technical Director sebelum balapan. Pada awalnya, protes keempat tim itu ditolak oleh steward MotoGP sehingga dibawa ke Pengadilan
            Banding FIM.Sidang itu sendiri akan dilakukan sebelum seri kedua di Argentina digelar 29-31 Maret mendatang. Manajer umum Ducati Gigi Dall'lgna berkukuh tidak
            ada yang ilegal dengan komponen itu. Namun, seandainya pengadilan mengabulkan gugatan tersebut Ducati akan mempertimbangkan melanjutkan kasus ini
            ke CAS. "Di dalam federasi, derajatnya berakhir di Pengadilan Banding FIM. Anda harus pergi ke CAS yang adalah pengadilan olahraga tapi di dalam kasus ini Anda
            keluar dari perimeter FIM," Dall'lgna mengungkapkan kepada MotoGP.com "Saya bahkan tidak ingin memikirkan sampai titik ini. Kami sangat yakin bahwa kami
            tidak melanggar regulasi kok, dan yakin kami tidak melihat adanya alasanmengapa pengadilan banding bisa memutuskan secara berbeda".
          </p>
        </Container>

        <br/>
        <Container textAlign="center">
          <Button icon labelPosition="left" color="teal">
            <Icon name="plus"/>
          Tambah Tautan Ke List</Button>
          </Container>
        </Container>
      </div>
    );
  }
}
export default App;

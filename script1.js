function initialize() {
    var mapOptions = { // กำหนดคุณสมบัติของ map
        center: new google.maps.LatLng(13.724618, 100.584682), //จุดกึ่งกลางของ map
        zoom: 15 //การซูมของ map
        // disableDefaultUI: true //ปิดการ control ทั้งหมด
        // zoomControl: false, //ปิดการซูม
        // streetViewControl: false 
    }
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions); //สร้างแผนที่
}
// google.maps.event.addDomListener(window, 'load', initialize); //ต้องสั่งให้โหลดมาแสดงผลบนหน้าเว็บด้วย
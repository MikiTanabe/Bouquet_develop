//VueComponents
var SearchBox = new Vue({
    el: '#SearchBox',
    data: {
    name: 'Vue.js'
    },
    // `methods` オブジェクトの下にメソッドを定義する
    methods: {
        Search_Click: function (event) {
            console.log('success!!');
            }
    }
});

//Events
window.onload = function() {
    //サロンデータの取得
    var salons = {};

    db.collection("salons").get().then(function(DocumentSnapshot){
        DocumentSnapshot.forEach(doc => {
            var salon = {};
            salon['name'] = doc.get("name");
            salon['createsDate'] = doc.get("createsDate");
            salon['features'] = doc.get("features");
            salon['prefecture'] = doc.get("prefecture");
            salons[doc.id.toString()] = salon;
        });
    });

    //配列中身確認
    console.log(salons);
}


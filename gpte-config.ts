import { PlutusScript, Data, UTxO, resolveScriptRef } from "@meshsdk/core";

// Instance Tokens
export const issuerAsset = "15a9a88cf6e6f4e806a853cede246d0430455d4944401b9b71309fca7070626c3230323341646d696e303030";
export const issuerPolicyID = "15a9a88cf6e6f4e806a853cede246d0430455d4944401b9b71309fca";
export const contributorPolicyID = "05cf1f9c1e4cdcb6702ed2c978d55beff5e178b206b4ec7935d5e056";

export const projectAsset = "fb45417ab92a155da3b31a8928c873eb9fd36c62184c736f189d334c7447696d62616c";

export const referenceScriptAddress =
  "addr_test1qrw445926m0ffzme6fk65mq0d9004f66zyj6jtzlyv73t9sefs0xl34s9kau3can6zs9f2hyqe3sv5vnleytzxlkp5cqlym77s";

export const metadataKey = "161803988"

// ---------------------------------------------------------------------------------------------
//
// Treasury Contract
//
// ---------------------------------------------------------------------------------------------

export const treasury = {
  network: "0",
  address: "addr_test1wqrr5cvc4ecne0k49a7vkktdxtu7jlp90g53u3gd9gjt86ss0hpf6",
  metadataKey: "161803988",
};

export const treasuryPlutusScript: PlutusScript = {
  version: "V2",
  code: "59128c591289010000332323232323232323232323232332232323232322232322323223232533533300a3357389211944617461206465636f646564207375636365737366756c6c79003333573466e1cd55cea8042400046644246600200600466a018eb8d5d0a8041bae357426ae8940208c98c8074cd5ce00f00e80d99ab9c4911d52656465656d6572206465636f646564207375636365737366756c6c79003333573466e1d40112002212200123333573466e1d4015200023212230020033232323232323333573466e1cd55cea802a400046666644444246666600200c00a0080060046eb8d5d0a8029bad35742a0086eb4d5d0a8019bad35742a0046eb8d5d09aba2500223263202533573804c04a04626ae8940044d5d1280089aba25001135573ca00226ea8004d5d09aab9e500723263201e33573803e03c03803666ae7124012353637269707420636f6e74657874206465636f646564207375636365737366756c6c79003333573466e1cd55cea80124000466442466002006004646464646464646464646464646666ae68cdc39aab9d500c480008cccccccccccc88888888888848cccccccccccc00403403002c02802402001c01801401000c008cd406806cd5d0a80619a80d00d9aba1500b33501a01c35742a014666aa03ceb94074d5d0a804999aa80f3ae501d35742a01066a03404a6ae85401cccd54078099d69aba150063232323333573466e1cd55cea801240004664424660020060046464646666ae68cdc39aab9d5002480008cc8848cc00400c008cd40c1d69aba150023031357426ae8940088c98c80cccd5ce01a01981889aab9e5001137540026ae854008c8c8c8cccd5cd19b8735573aa004900011991091980080180119a8183ad35742a00460626ae84d5d1280111931901999ab9c034033031135573ca00226ea8004d5d09aba2500223263202f33573806005e05a26aae7940044dd50009aba1500533501a75c6ae854010ccd540780888004d5d0a801999aa80f3ae200135742a00460486ae84d5d1280111931901599ab9c02c02b029135744a00226ae8940044d5d1280089aba25001135744a00226ae8940044d5d1280089aba25001135744a00226ae8940044d55cf280089baa00135742a00460286ae84d5d1280111931900e99ab9c01e01d01b101c13263201c335738921035054350001c135573ca00226ea80044d55cea80089baa001135573ca00226ea800448c88c008dd6000990009aa80a111999aab9f0012500a233500930043574200460066ae880080508c8c8cccd5cd19b8735573aa004900011991091980080180118061aba150023005357426ae8940088c98c8050cd5ce00a80a00909aab9e5001137540024646464646666ae68cdc39aab9d5004480008cccc888848cccc00401401000c008c8c8c8cccd5cd19b8735573aa0049000119910919800801801180a9aba1500233500f014357426ae8940088c98c8064cd5ce00d00c80b89aab9e5001137540026ae854010ccd54021d728039aba150033232323333573466e1d4005200423212223002004357426aae79400c8cccd5cd19b875002480088c84888c004010dd71aba135573ca00846666ae68cdc3a801a400042444006464c6403666ae7007006c06406005c4d55cea80089baa00135742a00466a016eb8d5d09aba2500223263201533573802c02a02626ae8940044d5d1280089aab9e500113754002266aa002eb9d6889119118011bab00132001355011223233335573e0044a010466a00e66442466002006004600c6aae754008c014d55cf280118021aba200301213574200222440042442446600200800624464646666ae68cdc3a800a40004642446004006600a6ae84d55cf280191999ab9a3370ea0049001109100091931900819ab9c01101000e00d135573aa00226ea80048c8c8cccd5cd19b875001480188c848888c010014c01cd5d09aab9e500323333573466e1d400920042321222230020053009357426aae7940108cccd5cd19b875003480088c848888c004014c01cd5d09aab9e500523333573466e1d40112000232122223003005375c6ae84d55cf280311931900819ab9c01101000e00d00c00b135573aa00226ea80048c8c8cccd5cd19b8735573aa004900011991091980080180118029aba15002375a6ae84d5d1280111931900619ab9c00d00c00a135573ca00226ea80048c8cccd5cd19b8735573aa002900011bae357426aae7940088c98c8028cd5ce00580500409baa001232323232323333573466e1d4005200c21222222200323333573466e1d4009200a21222222200423333573466e1d400d2008233221222222233001009008375c6ae854014dd69aba135744a00a46666ae68cdc3a8022400c4664424444444660040120106eb8d5d0a8039bae357426ae89401c8cccd5cd19b875005480108cc8848888888cc018024020c030d5d0a8049bae357426ae8940248cccd5cd19b875006480088c848888888c01c020c034d5d09aab9e500b23333573466e1d401d2000232122222223005008300e357426aae7940308c98c804ccd5ce00a00980880800780700680600589aab9d5004135573ca00626aae7940084d55cf280089baa0012323232323333573466e1d400520022333222122333001005004003375a6ae854010dd69aba15003375a6ae84d5d1280191999ab9a3370ea0049000119091180100198041aba135573ca00c464c6401866ae700340300280244d55cea80189aba25001135573ca00226ea80048c8c8cccd5cd19b875001480088c8488c00400cdd71aba135573ca00646666ae68cdc3a8012400046424460040066eb8d5d09aab9e500423263200933573801401200e00c26aae7540044dd500089119191999ab9a3370ea00290021091100091999ab9a3370ea00490011190911180180218031aba135573ca00846666ae68cdc3a801a400042444004464c6401466ae7002c02802001c0184d55cea80089baa0012323333573466e1d40052002212200223333573466e1d40092000212200123263200633573800e00c00800626aae74dd5000a4c240029201035054310011232300100122330033002002001332323232332232323232332232323232323233223232323232323232232222323232323232325335009215335533533355301a1200135018501c2333573466e3cd40388888801000408007d4018407c4cd5ce24920436f6e7472696220746f6b656e206d697373696e672066726f6d20696e7075740001e15335533533355301a1200135018501c2333573466e3cd40388888801000408007cc8cd54c068480048d400488008005401c407c4cd5ce2492a436f6e7472696220746f6b656e206d697373696e672066726f6d20636f6e7472616374206f75747075740001e1533553355335333573466e1cccc039401c048048d40048888801007c0784ccd5cd19b8733300e50073500d222220023500d22222001350012222200301f01e101e101f1335738921264f75747075742056616c7565206d757374206d617463682050726f6a65637444657461696c730001e153355335333573466e1cccc0394008048048cdc099980728020090091a8009111100200f80f080f899ab9c4901255472656173757279206d757374206b6565702072656d61696e696e67206c6f76656c6163650001e153355335333573466e1cccc0394008d403488888008d403488888004cdc099980728021a806911110011a806911110009a8009111100180f80f080f899ab9c4901235472656173757279206d757374206b6565702072656d61696e696e6720746f6b656e730001e15335533533355301a1200135018501c2333573466e3cd40088888800400408007cd402c88008407c4cd5ce2481184e6f7420612076616c69642050726f6a65637420686173680001e153355335323253335002153335001102121021210212153335002102121333573466ebc00800408c08884088854ccd400840848408884cc084008004d540108888008d540148888008407c4cd5ce24811b496e20616e64206f757420646174756d206d757374206d617463680001e1533553335355335300c35500822222222222200a130224988854cd40044008884c0992622220021326320243357389211077726f6e6720646174756d20747970650002821333573466ebc004d400888888cdd2a400066ae80dd480299aba0375000866ae80dd400199aba0375000466ae80dd48009bb102902001f213263202533573892011077726f6e6720646174756d207479706500029101f133573892012652656465656d657220616e6420657363726f7720646174756d206e6f74207468652073616d650001e101e101e101e101e101e101e101e153353335530191200135017501b2333573466e3cd40348888801400407c079401440784cd5ce24811f4f6e6c79204973737565722063616e206368616e67652054726561737572790001d13550012222003153355335300d0062135001223500122223500d22350022222222222223335530271200122350022222533533029018004133503c0060051005503700a1326320213357389201024c66000251301e4988854cd40044008884c089261355001222200315335300b00421350012200113263201f33573892116747265617375727920696e707574206d697373696e67000231335530131200123500122002355002222222222222333553020120013350215019502b2350012235001222200300c133355300e12001500c501e33553008120012350012200132323500122222222222233355301c12001223500222223500422335002200825335333573466e3c00405c0bc0b84cd40d0cd540d8014018020402140b00294008d40188888800c4d400488008c8004d54074894cd40045406c8854cd4cc024d40088888010cc8848cc00400c008c8488c00400cd40148888800d407c4cd4070008c0100044c010004888c8c8c004014c8004d5407c88cd400520002235002225335333573466e3c00802406c0684c01c0044c01800cc8004d5407888cd400520002235002225335333573466e3c00801c06806440044c01800cc8004d540688844894cd400454068884cd406cc010008cd54c018480040100048d400488d4008888888888888cccd40349409c9409c9409c8ccd54c06848004cd406c894cd40088400c4005409c8d4004894cd54cd4ccd5cd19b8f350022200235004220020220211333573466e1cd400888004d40108800408808440844488c008014540a803488d400888d400c88c8cd40148cd401094cd4ccd5cd19b8f00200101701615003101620162335004201625335333573466e3c00800405c0585400c405854cd400c854cd400884cd40088cd40088cd40088cd40088cc06000800480648cd400880648cc060008004888064888cd401080648894cd4ccd5cd19b8700600301c01b15335333573466e1c01400807006c4ccd5cd19b8700400101c01b101b101b1014153350012101410144890012233553008120012350012233550180023355300b1200123500122335501b00233350012330164800000488cc05c0080048cc05800520000013355300812001235001223355018002333500123355300c1200123500122335501c00235500d0010012233355500801100200123355300c1200123500122335501c00235500c00100133355500300c002001111222333553004120015013335530081200123500122335501800235500900133355300412001223500222533533355300d120013500b500f235001223300a00200500610031335017004003501400133553008120012350012232335501900330010053200135501b225335001135500a003221350022253353300c002008112223300200a0041300600300232001355014221122253350011002221330050023335530071200100500400111212223003004112122230010041233500422333500322002002001350012200132001355010221122533500115010221335011300400233553006120010040013200135500f22112225335001135003220012213335005220023004002333553007120010050040011221233001003002112330012253350021006100100322333573466e3c00800401000c48800848800488cdc000100091931900219ab9c49012465787065637465642065786163746c79206f6e65207472656173757279206f75747075740000823263200333573892012265787065637465642065786163746c79206f6e6520657363726f77206f7574707574000074984488008488488cc00401000c448848cc00400c008448800448004448c8c00400488cc00cc008008004cd4488ccccc00922011c15a9a88cf6e6f4e806a853cede246d0430455d4944401b9b71309fca0048811c05cf1f9c1e4cdcb6702ed2c978d55beff5e178b206b4ec7935d5e0560048811c2f6436267768e0bc9d65beb6f9326c862a5c0b259ea4bbe8c09ee56c0048811cfb45417ab92a155da3b31a8928c873eb9fd36c62184c736f189d334c004881077447696d62616c00222221233333001006005004003002200101",
};

export const treasuryReferenceUTxO: UTxO = {
  input: {
    outputIndex: 0,
    txHash: "2a6792aa47bd2ca46f6ce4190d482cecf68b83b8fc414ab84bb2874091f08fb4",
  },
  output: {
    address: referenceScriptAddress,
    amount: [
      {
        unit: "lovelace",
        quantity: "21489660",
      },
    ],
    scriptRef: resolveScriptRef(treasuryPlutusScript),
  },
};

// ---------------------------------------------------------------------------------------------
//
// Escrow Contract
//
// ---------------------------------------------------------------------------------------------

export const escrowAddress = "addr_test1wqhkgd3xwa5wp0yavkltd7fjdjrz5hqtyk02fwlgcz0w2mqhjexy7";

export const escrow = {
  address: "addr_test1wqhkgd3xwa5wp0yavkltd7fjdjrz5hqtyk02fwlgcz0w2mqhjexy7"
}

export const escrowPlutusScript: PlutusScript = {
  version: "V2",
  code: "5914455914420100003323232323232323232323232323322323232323222323232323223223232533533300c3357389211944617461206465636f646564207375636365737366756c6c79003333573466e1cd55cea8052400046666644444246666600200c00a0080060046eb8d5d0a8051bad35742a0126eb4d5d0a8041bad35742a00e6eb8d5d09aba2500723263201f33573804003e03a66ae7124011d52656465656d6572206465636f646564207375636365737366756c6c79003333573466e1d401120042122200123333573466e1d401520022122200223333573466e1d401920002122200323263202133573804404203e03c03a66ae712412353637269707420636f6e74657874206465636f646564207375636365737366756c6c79003333573466e1cd55cea80124000466442466002006004646464646464646464646464646666ae68cdc39aab9d500c480008cccccccccccc88888888888848cccccccccccc00403403002c02802402001c01801401000c008cd4070074d5d0a80619a80e00e9aba1500b33501c01e35742a014666aa040eb9407cd5d0a804999aa8103ae501f35742a01066a03804e6ae85401cccd540800a1d69aba150063232323333573466e1cd55cea801240004664424660020060046464646666ae68cdc39aab9d5002480008cc8848cc00400c008cd40c9d69aba150023033357426ae8940088c98c80d4cd5ce01b01a81989aab9e5001137540026ae854008c8c8c8cccd5cd19b8735573aa004900011991091980080180119a8193ad35742a00460666ae84d5d1280111931901a99ab9c036035033135573ca00226ea8004d5d09aba2500223263203133573806406205e26aae7940044dd50009aba1500533501c75c6ae854010ccd540800908004d5d0a801999aa8103ae200135742a004604c6ae84d5d1280111931901699ab9c02e02d02b135744a00226ae8940044d5d1280089aba25001135744a00226ae8940044d5d1280089aba25001135744a00226ae8940044d55cf280089baa00135742a004602c6ae84d5d1280111931900f99ab9c02001f01d101e13263201e335738921035054350001e135573ca00226ea80044d55ce9baa001135744a00226ae8940044d5d1280089aab9e5001137540022464460046eb0004c8004d5405088cccd55cf80092805119a80498021aba1002300335744004028464646666ae68cdc39aab9d5002480008cc8848cc00400c008c030d5d0a80118029aba135744a004464c6402866ae700540500484d55cf280089baa0012323232323333573466e1cd55cea8022400046666444424666600200a0080060046464646666ae68cdc39aab9d5002480008cc8848cc00400c008c054d5d0a80119a80780a1aba135744a004464c6403266ae7006806405c4d55cf280089baa00135742a008666aa010eb9401cd5d0a8019919191999ab9a3370ea0029002119091118010021aba135573ca00646666ae68cdc3a80124004464244460020086eb8d5d09aab9e500423333573466e1d400d20002122200323263201b33573803803603203002e26aae7540044dd50009aba1500233500b75c6ae84d5d1280111931900a99ab9c016015013135744a00226ae8940044d55cf280089baa0011335500175ceb44488c88c008dd5800990009aa80891191999aab9f00225008233500733221233001003002300635573aa004600a6aae794008c010d5d100180909aba100111220021221223300100400312232323333573466e1d4005200023212230020033005357426aae79400c8cccd5cd19b8750024800884880048c98c8040cd5ce00880800700689aab9d500113754002464646666ae68cdc3a800a400c46424444600800a600e6ae84d55cf280191999ab9a3370ea004900211909111180100298049aba135573ca00846666ae68cdc3a801a400446424444600200a600e6ae84d55cf280291999ab9a3370ea00890001190911118018029bae357426aae7940188c98c8040cd5ce00880800700680600589aab9d500113754002464646666ae68cdc39aab9d5002480008cc8848cc00400c008c014d5d0a8011bad357426ae8940088c98c8030cd5ce00680600509aab9e5001137540024646666ae68cdc39aab9d5001480008dd71aba135573ca004464c6401466ae7002c0280204dd5000919191919191999ab9a3370ea002900610911111100191999ab9a3370ea004900510911111100211999ab9a3370ea00690041199109111111198008048041bae35742a00a6eb4d5d09aba2500523333573466e1d40112006233221222222233002009008375c6ae85401cdd71aba135744a00e46666ae68cdc3a802a400846644244444446600c01201060186ae854024dd71aba135744a01246666ae68cdc3a8032400446424444444600e010601a6ae84d55cf280591999ab9a3370ea00e900011909111111180280418071aba135573ca018464c6402666ae7005004c04404003c03803403002c4d55cea80209aab9e5003135573ca00426aae7940044dd50009191919191999ab9a3370ea002900111999110911998008028020019bad35742a0086eb4d5d0a8019bad357426ae89400c8cccd5cd19b875002480008c8488c00800cc020d5d09aab9e500623263200c33573801a01801401226aae75400c4d5d1280089aab9e500113754002464646666ae68cdc3a800a400446424460020066eb8d5d09aab9e500323333573466e1d400920002321223002003375c6ae84d55cf280211931900499ab9c00a009007006135573aa00226ea8004488c8c8cccd5cd19b87500148010848880048cccd5cd19b875002480088c84888c00c010c018d5d09aab9e500423333573466e1d400d20002122200223263200a33573801601401000e00c26aae7540044dd50009191999ab9a3370ea0029001109100111999ab9a3370ea0049000109100091931900319ab9c007006004003135573a6ea80052612001490103505431001123230010012233003300200200133232332232332232323232323322323232323232332232323233322232323232323222223232323232533350071533553355003101f13357389201264f6e6c79204973737565722063616e2043616e63656c20436f6d6d69746d656e74205554784f0001e15335323232350022235002223500522350022253335333501900b00600215335001153350051333501800b00300710291333501800b00300710291333501800b0030073550072222222222220053212330010021233001122200102332123300100202232122230030043500922222002123333333300100c225335333573466e1c008004088084405454cd4ccd5cd19b890020010220211013101422333573466e2000800408808488ccd5cd19b8900200102202122333573466e2400800408408888ccd5cd19b88002001021022225335333573466e2400800408808440044008894cd4ccd5cd19b8900200102202110021001101f13357389212943616e206f6e6c792063616e63656c20436f6d6d69746d656e7420616674657220646561646c696e650001e101e1533553355003101f13357389212e497373756572206d757374207369676e20746f206469737472696275746520436f6d6d69746d656e74205554784f0001e153355335333573466e20ccc0294010d40248888010d4024888800cd40208888800c07807c4ccd5cd19b8833300a500400c00c350082222200401e01f101e101f13357389212b436f6e7472696275746f72206d75737420726563656976652066756c6c20657363726f772076616c7565730001e101e1533553355003101f1335738921264f6e6c79204973737565722063616e2055706461746520436f6d6d69746d656e74205554784f0001e1533553355335333573466e1cccc028d54008888800cd40248888010d4024888800cd540048888800c07c0784ccd5cd19b8733300a355002222200300c00c3550012222200401f01e101e101f1335738921294f7574707574205554584f2076616c7565206d7573742062652067657120646174756d2073706563730001e153355335333573466e3cd5400488888004d40208888800407c07854cd4ccd5cd19b8f35500122222005350082222200501f01e15335333573466e20d5400488888010d40208888801007807c54cd4ccd5cd19b8835500122222003350082222200301e01f1333573466e20d5400488888008d40208888800807807c4078407840784078407c4cd5ce249296f6e6c792061646120616e642067696d62616c20616d6f756e742063616e206265206368616e6765640001e101e101e1533353550012222002132632024335738921136e6f7420616e20696e6c696e6520646174756d000292323232323232153353333333574800e46666ae68cdc39aab9d5007480008cccd55cfa8039281891999aab9f500725032233335573ea00e4a06646666aae7d401c940d08cccd55cfa8039281a91999aab9f35744a0104a66a605e6ae854034854cd4c0bcd5d0a80690a99a98181aba1500d215335303135742a01a42a66a60666ae85403484d40f048ccccc00401801401000c008540e8540e4540e0540dc540d8940d80dc0d80d40d00cc0c8940c00ac940bc940bc940bc940bc0c0840044c98c80accd5ce248114646174756d206861732077726f6e67207479706500030135744a00226ae8940044d5d1280089aba25001135573ca00226ea800484c98c8094cd5ce2481136e6f7420616e20696e6c696e6520646174756d0002a1533553353500422350022222222222223333500d25035250352503523335530271200133502822533500221003100150352350012253355335333573466e3cd400888008d4010880080bc0b84ccd5cd19b873500222001350042200102f02e102e1350390031503800d2135001223500122223500b2235002222222222222333553028120012235002222253353501822350062232335005233500425335333573466e3c0080040fc0f85400c40f880f88cd401080f894cd4ccd5cd19b8f00200103f03e15003103e153350032153350022133500223350022335002233500223304000200120412335002204123304000200122204122233500420412225335333573466e1c01800c11010c54cd4ccd5cd19b8700500204404313303000400110431043103c153350012103c103c133503e0060051005503900a1326320233357389201024c6600028130214988854cd40044008884c095261333553017120013501550192333573466e3cd401c8888004004074070cd54c058480048d400488008d54008888888888888ccd54c08c48004cd4091407140bc8d400488d4004888800c0304ccd54c04448005403d4088c8c8d4004888888888888ccd54c07c4800488d40088888d401088cd400894cd4ccd5cd19b8f017001032031133503800600810082008503000a50023500422222005135001220022223232300100532001355025223350014800088d4008894cd4ccd5cd19b8f00200901f01e130070011300600332001355024223350014800088d4008894cd4ccd5cd19b8f00200701e01d10011300600322333573466e1c0080040580552210012223500222350032253335333500800700400215335003100110191018101912223232323253335006215333500621533350082130044984c00d261533350072130044984c00d26100d100b1533350072130044984c00d261533350062130044984c00d26100c1533350052100a100b100915333500521533350072130054984c011261533350062130054984c01126100c100a1533350062130054984c011261533350052130054984c01126100b2533350052153335007215333500721333500b00a002001161616100b153335006215333500621333500a009002001161616100a10092533350042153335006215333500621333500a009002001161616100a15333500521533350052133350090080020011616161009100825333500321533350052153335005213335009008002001161616100915333500421533350042133350080070020011616161008100725333500221533350042153335004213335008007002001161616100815333500321533350032133350070060020011616161007100612350012222222200712220031222002122200112233553008120012350012233550190023355300b1200123500122335501c00233350012330184800000488cc0640080048cc06000520000013355300812001235001223355019002333500123355300c1200123500122335501d00235500d0010012233355500801100200123355300c1200123500122335501d00235500c00100133355500300c002001111222333553004120015014335530081200123500122335501900235500900133355300412001223500222533533355300d120013500b500f235001223300a00200500610031335018004003501500133553008120012350012232335501a00330010053200135501d225335001135500a003221350022253353300c002008112223300200a0041300600300232001355016221122253350011002221330050023335530071200100500400111212223003004112122230010041233500422333500322002002001350012200132001355012221122533500115011221335012300400233553006120010040013200135501122112225335001135003220012213335005220023004002333553007120010050040011221233001003002112330012253350021006100100322333573466e3c00800401000c4880084880048ccccccd5d200092805128051280511a8059bad0022500a00b2333333357480024a0124a0124a0124a01246a0146eb800802888cdc000100091931900199ab9c49011b65786163746c79206f6e65206f7574707574206578706563746564000084984488008488488cc00401000c448848cc00400c00848488c00800c448800448004448c8c00400488cc00cc008008004cd4488cccc0092211cfb45417ab92a155da3b31a8928c873eb9fd36c62184c736f189d334c004881077447696d62616c0048811c05cf1f9c1e4cdcb6702ed2c978d55beff5e178b206b4ec7935d5e0560048811c15a9a88cf6e6f4e806a853cede246d0430455d4944401b9b71309fca00222212333300100500400300220011",
};

export const escrowReferenceUTxO: UTxO = {
  input: {
    outputIndex: 0,
    txHash: "7815005b3d138db79def10bf283f821740a7e4f6d8920da77a370860db6ba7e0",
  },
  output: {
    address: referenceScriptAddress,
    amount: [
      {
        unit: "lovelace",
        quantity: "23390370",
      },
    ],
    scriptRef: resolveScriptRef(escrowPlutusScript),
  },
};

// ---------------------------------------------------------------------------------------------
//
// Contributor Reference Contract
//
// ---------------------------------------------------------------------------------------------

export const contributorReferenceAddress = "addr_test1wr6ewsvtmdjv8znh7wxvw9qezgwvju5rdk9gmgefvrvrhug7zrfe0";

export const contributorReferencePlutusScript: PlutusScript = {
  version: "V2",
  code: "590ecf590ecc010000332332232323232323232323232323232323232322232322323223232533533300a3333573466e1cd55cea8042400046464246600200600466a01aeb8d5d09aba25009375a6ae8540208c98c806ccd5ce00e00d80c9999ab9a3370ea00890021091100191999ab9a3370ea00a9001119091118008021bad357426aae79401c8cccd5cd19b87500648000848880088c98c8074cd5ce00f00e80d80d00c9999ab9a3370e6aae7540092000233221233001003002323232323232323232323232323333573466e1cd55cea8062400046666666666664444444444442466666666666600201a01801601401201000e00c00a00800600466a0340366ae854030cd406806cd5d0a80599a80d00e1aba1500a3335501e75ca03a6ae854024ccd54079d7280e9aba1500833501a02335742a00e666aa03c048eb4d5d0a8031919191999ab9a3370e6aae75400920002332212330010030023232323333573466e1cd55cea8012400046644246600200600466a05ceb4d5d0a80118179aba135744a004464c6406266ae700c80c40bc4d55cf280089baa00135742a0046464646666ae68cdc39aab9d5002480008cc8848cc00400c008cd40b9d69aba15002302f357426ae8940088c98c80c4cd5ce01901881789aab9e5001137540026ae84d5d1280111931901699ab9c02e02d02b135573ca00226ea8004d5d0a80299a80d3ae35742a008666aa03c04040026ae85400cccd54079d710009aba150023022357426ae8940088c98c80a4cd5ce01501481389aba25001135744a00226ae8940044d5d1280089aba25001135744a00226ae8940044d5d1280089aba25001135744a00226aae7940044dd50009aba150023012357426ae8940088c98c806ccd5ce00e00d80c880d09931900d19ab9c4901035054350001a135573ca00226ea80044d55cea80089baa001135573ca00226ea800448c88c008dd6000990009aa80a111999aab9f00125016233501530043574200460066ae880080488c8c8cccd5cd19b8735573aa004900011991091980080180118051aba150023005357426ae8940088c98c8048cd5ce00980900809aab9e5001137540024646464646666ae68cdc39aab9d5004480008cccc888848cccc00401401000c008c8c8c8cccd5cd19b8735573aa004900011991091980080180118099aba1500233500d012357426ae8940088c98c805ccd5ce00c00b80a89aab9e5001137540026ae854010ccd54021d728039aba150033232323333573466e1d4005200423212223002004357426aae79400c8cccd5cd19b875002480088c84888c004010dd71aba135573ca00846666ae68cdc3a801a400042444006464c6403266ae7006806405c0580544d55cea80089baa00135742a00466a012eb8d5d09aba2500223263201333573802802602226ae8940044d5d1280089aab9e500113754002266aa002eb9d6889119118011bab00132001355011223233335573e0044a028466a02666442466002006004600c6aae754008c014d55cf280118021aba200301013574200224464646666ae68cdc3a800a40004642446004006600a6ae84d55cf280191999ab9a3370ea0049001109100091931900819ab9c01101000e00d135573aa00226ea80048c8c8cccd5cd19b875001480188c848888c010014c01cd5d09aab9e500323333573466e1d400920042321222230020053009357426aae7940108cccd5cd19b875003480088c848888c004014c01cd5d09aab9e500523333573466e1d40112000232122223003005375c6ae84d55cf280311931900819ab9c01101000e00d00c00b135573aa00226ea80048c8c8cccd5cd19b8735573aa004900011991091980080180118029aba15002375a6ae84d5d1280111931900619ab9c00d00c00a135573ca00226ea80048c8cccd5cd19b8735573aa002900011bae357426aae7940088c98c8028cd5ce00580500409baa001232323232323333573466e1d4005200c21222222200323333573466e1d4009200a21222222200423333573466e1d400d2008233221222222233001009008375c6ae854014dd69aba135744a00a46666ae68cdc3a8022400c4664424444444660040120106eb8d5d0a8039bae357426ae89401c8cccd5cd19b875005480108cc8848888888cc018024020c030d5d0a8049bae357426ae8940248cccd5cd19b875006480088c848888888c01c020c034d5d09aab9e500b23333573466e1d401d2000232122222223005008300e357426aae7940308c98c804ccd5ce00a00980880800780700680600589aab9d5004135573ca00626aae7940084d55cf280089baa0012323232323333573466e1d400520022333222122333001005004003375a6ae854010dd69aba15003375a6ae84d5d1280191999ab9a3370ea0049000119091180100198041aba135573ca00c464c6401866ae700340300280244d55cea80189aba25001135573ca00226ea80048c8c8cccd5cd19b875001480088c8488c00400cdd71aba135573ca00646666ae68cdc3a8012400046424460040066eb8d5d09aab9e500423263200933573801401200e00c26aae7540044dd500089119191999ab9a3370ea00290021091100091999ab9a3370ea00490011190911180180218031aba135573ca00846666ae68cdc3a801a400042444004464c6401466ae7002c02802001c0184d55cea80089baa0012323333573466e1d40052002212200223333573466e1d40092000212200123263200633573800e00c00800626aae74dd5000a4c240029201035054310011220021221223300100400311232300100122330033002002001332323232332233223232323232323232323232323322323232323322322322223235002232253335006153355002102013357389211441646d696e20546f6b656e2052657175697265640001f1533553355002102013357389211441646d696e20546f6b656e2052657175697265640001f153355335500421333573466e1cd402088008d400488008084080407c40804cd5ce2481164e657720646174756d206973206e6f742076616c69640001f101f215335533553353009323301f50240013500422222222222233355302212001501b2350012235001222200300c10202215335001102222153350011333573466e3cccdc601499b81371a008052008666e300a8cdc09b8d00202a002025024221026102113357389212d436f6e7472696275746f7220616e64207265666572656e636520746f6b656e7320646f206e6f74206d617463680002015335533550052132350022235003225335333573466e1c01000809c0984ccd4c0804800407c00c0044098cc03c008d402488004408040844cd5ce249164e657720646174756d206973206e6f742076616c69640002010201333553013120013501150152333573466e3cd40208800800407c078cd54c048480048d400488008d4004888888888888ccd54c07c4800540608d400488d4004888800c03054cd54cd54cd4d400488d4008888888888888cccd40349405894058940588ccd54c08048004cd4084894cd40088400c400540588d4004894cd54cd4ccd5cd19b8f3500222002350042200202e02d1333573466e1cd400888004d4010880040b80b440b44d406800c5406403484d400488d40048888d402088d4008888888888888ccd54c0844800488d400888894cd4d406088d401888c8cd40148cd401094cd4ccd5cd19b8f00200103e03d15003103d203d2335004203d25335333573466e3c0080040f80f45400c40f454cd400c854cd400884cd40088cd40088cd40088cd40088cc0e400800481008cd400881008cc0e4008004888100888cd401081008894cd4ccd5cd19b8700600304304215335333573466e1c01400810c1084ccd5cd19b8700400104304210421042103b153350012103b103b13350380060051005503300a1326320073357389201024c660001815007221533500113500a002221500b2153335350012222002150082323213500c3333573466e1cd55cea8012400046601c6eb4d5d0a80119180e9bac001357426ae8940088c98c8030cd5ce249035054310001d00a135573ca00226ea80048540245401cc8004d54078894cd400454070884d40088894cd4ccd5cd19b8f003350082200101f01e133502000230070041300700449848488c00800c44880048848cc00400c0084cd402088cd54c020480048d400488cd54068008cd54c02c480048d400488cd54074008ccd40048cc0552000001223301600200123301500148000004cd54c020480048d400488cd54068008ccd40048cd54c030480048d400488cd54078008d5403400400488ccd5540200440080048cd54c030480048d400488cd54078008d54030004004ccd55400c0300080054050444888ccd54c010480054054cd54c020480048d400488cd54068008d54024004ccd54c0104800488d4008894cd4ccd54c03448004d402d403c8d400488cc028008014018400c4cd406401000d4058004cd54c020480048d400488c8cd5406c00cc004014c8004d54074894cd40044d5402800c884d4008894cd4cc03000802044888cc0080280104c01800c008c8004d5405888448894cd40044008884cc014008ccd54c01c480040140100044484888c00c0104484888c00401048cd401088ccd400c88008008004d400488004c8004d540488844894cd400454048884cd404cc010008cd54c01848004010004c8004d5404488448894cd40044d400c88004884ccd401488008c010008ccd54c01c4800401401000448848cc00400c008448cc004894cd40084030400402488ccd5cd19b8f00200100a0093200135500d221222533500215335001100c22100d2215335003100d22153353300700400213335300912001007003001100f2233700004002640026aa016446666aae7c004940288cd4024dd71aba100230033574400400624002640026aa012444a66a00220044426a004446600e66601000400c002006640026aa0104444a66a00220044426a00444a66a666ae68cdc3800a4000014012266601000e00c006266601000e66a0162466600201000600400c0062440042440022244004244244660020080062244246600200600490032400c2246460020024466006600400400266a2446600491011c15a9a88cf6e6f4e806a853cede246d0430455d4944401b9b71309fca0048811c05cf1f9c1e4cdcb6702ed2c978d55beff5e178b206b4ec7935d5e0560022123300100300220011",
};

// export const contributorReferenceReferenceUTxO: UTxO = {
//   input: {
//     outputIndex: 0,
//     txHash: "",
//   },
//   output: {
//     address: referenceScriptAddress,
//     amount: [
//       {
//         unit: "lovelace",
//         quantity: "",
//       },
//     ],
//     scriptRef: resolveScriptRef(contributorReferencePlutusScript),
//   },
// };
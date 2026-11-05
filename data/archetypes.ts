export type ArchetypeCode =
  | "EFDV"
  | "EFDA"
  | "EFRV"
  | "EFRA"
  | "ESDV"
  | "ESDA"
  | "ESRV"
  | "ESRA"
  | "IFDV"
  | "IFDA"
  | "IFRV"
  | "IFRA"
  | "ISDV"
  | "ISDA"
  | "ISRV"
  | "ISRA";

export interface FirstAidTip {
  title: string;
  body: string;
  minutes: number;
}

export interface Archetype {
  code: ArchetypeCode;
  name: string;
  slogan: string;
  color: string;
  tint: string;
  summary: string;
  stressStyle: string;
  strengths: readonly [string, string, string];
  watchouts: readonly [string, string, string];
  firstAid: readonly [FirstAidTip, FirstAidTip, FirstAidTip, FirstAidTip, FirstAidTip];
  weeklyHabits: readonly string[];
  phrasesToShare: readonly string[];
  neighbors: readonly [ArchetypeCode, ArchetypeCode];
}

export const ARCHETYPES: readonly Archetype[] = [
  {
    code: "EFDV",
    name: "Nạn Nhân Sóng Mạng",
    slogan: "Bạn vẫn còn muốn bước ra, chỉ là chưa biết bắt đầu từ đâu.",
    color: "#C96343",
    tint: "#FCF2ED",
    summary:
      "Bạn là người cảm nhận mọi thứ rất nhanh và thường để chúng tràn ra bên ngoài. Một chuyện không vui ở lớp có thể đi theo bạn về nhà, rồi thành một dòng trạng thái dài, một tin nhắn lúc khuya, hay một cuộc gọi cho người bạn thân. Cảm xúc của bạn không hề giả tạo: bạn cần được nhìn thấy, được nghe, và điều đó hoàn toàn bình thường. Bạn cũng đang mang trên vai kỳ vọng của gia đình và ánh mắt của người xung quanh. Đôi khi bạn trốn vào mạng xã hội để bớt nghĩ, nhưng lướt xong lại thấy mình nhỏ bé hơn, nhất là khi ai cũng có vẻ ổn. Điều đáng quý là bạn chưa buông xuôi. Bạn vẫn muốn tìm một lối ra, vẫn tò mò về bản thân, vẫn để lại một ô cửa mở cho ai đó bước vào. Bạn không cần phải mạnh mẽ một mình; bạn chỉ cần một nơi đủ an toàn để nói thật, và vài thói quen nhỏ để không bị cuốn theo dòng trôi.",
    stressStyle:
      "Khi mọi thứ quá tải, bạn thường kể hết cho một người hoặc đăng lên mạng, rồi ngay sau đó thấy hối hận, thu mình và lướt tiếp cho đến khi mệt.",
    strengths: [
      "Bạn nói được cảm xúc của mình, điều mà nhiều người phải mất rất lâu mới làm được.",
      "Bạn có radar xã hội tốt: nhanh nhận ra ai đang cần được quan tâm.",
      "Bạn dễ tạo kết nối và biết cách kéo người khác ra khỏi bầu không khí nặng nề.",
    ],
    watchouts: [
      "Bạn dễ so sánh đời mình với những gì người khác chọn đăng.",
      "Đăng để xả có thể khiến bạn phụ thuộc vào phản hồi hơn là hiểu mình.",
      "Bạn có xu hướng nhận quá nhiều ý kiến rồi tự rối.",
    ],
    firstAid: [
      {
        title: "Để điện thoại ở phòng khác",
        body: "Đặt máy ở nơi bạn không với tới, hẹn 10 phút. Viết ba câu: mình đang cảm thấy gì, vì sao, mình cần gì. Không cần viết hay.",
        minutes: 10,
      },
      {
        title: "Gọi một người, không cần kể hết",
        body: "Chọn người mà bạn không phải diễn. Chỉ cần nói: “Mình đang hơi tệ, cho mình nghe giọng bạn một chút.”",
        minutes: 10,
      },
      {
        title: "Hạ nhiệt cơ thể trước",
        body: "Rửa mặt bằng nước mát, thở ra dài hơn hít vào mười lần. Cơ thể dịu xuống thì suy nghĩ cũng bớt chạy.",
        minutes: 5,
      },
      {
        title: "Đi bộ một vòng, không tai nghe",
        body: "Ra khỏi bốn bức tường và để tai nghe lại. Chú ý ba âm thanh và ba màu sắc trên đường.",
        minutes: 12,
      },
      {
        title: "Dọn một góc nhỏ trên màn hình",
        body: "Tắt thông báo của hai tài khoản khiến bạn thấy mình kém hơn. Chỉ 5 phút, nhưng là một hành động bạn chọn cho mình.",
        minutes: 5,
      },
    ],
    weeklyHabits: [
      "Mỗi sáng, 30 phút đầu tiên không mở mạng xã hội.",
      "Mỗi tối, gửi một tin nhắn thật cho một người thật.",
      "Trước khi ngủ, để điện thoại ngoài tầm tay 15 phút.",
      "Mỗi tuần, chọn một ngày không đăng gì để nghe mình rõ hơn.",
    ],
    phrasesToShare: [
      "Con đang hơi ngợp, bố mẹ cho con mười phút rồi mình nói chuyện nhé.",
      "Con không cần bố mẹ giải quyết ngay đâu, con chỉ cần bố mẹ nghe con một lúc.",
      "Dạo này con thấy khó nói ra, bố mẹ có thể hỏi con nhẹ nhàng hơn không?",
    ],
    neighbors: ["EFDA", "ESDV"],
  },
  {
    code: "EFDA",
    name: "Chiếc Loa Vỡ",
    slogan: "Bạn không cần phải diễn thật giỏi mới được yêu thương.",
    color: "#A94A3B",
    tint: "#F9E7E2",
    summary:
      "Bạn là người dễ được nhớ đến: nói chuyện có duyên, cười to, và thường là người phá tan bầu không khí im lặng. Ở ngoài, bạn trông như chẳng có chuyện gì. Nhưng bên trong, bạn đang cố lấp đầy một khoảng trống mà không phải lúc nào cũng gọi được tên. Kỳ vọng từ gia đình khiến bạn học cách tỏ ra ổn để không ai phải lo, rồi dần dần bạn tin luôn vào màn trình diễn ấy. Mạng xã hội là nơi bạn có thể là bất kỳ ai, nhưng cũng là nơi bạn so sánh mình với những phiên bản hoàn hảo. Bạn sợ làm người khác thất vọng đến mức quên hỏi mình đang cần gì. Điều bạn chưa nhận ra là mọi người ở cạnh bạn không chỉ vì bạn vui. Bạn có sự ấm áp, sự can đảm và khả năng khiến người khác thấy bớt cô đơn. Khi cho phép mình yên lặng một chút, bạn sẽ thấy mình vẫn đủ đầy ngay cả khi không cần diễn.",
    stressStyle:
      "Khi mọi thứ quá tải, bạn càng nói to, càng đùa nhiều, rồi biến mất một lúc và tự hỏi vì sao mình vẫn thấy trống rỗng.",
    strengths: [
      "Bạn có khả năng làm người khác thấy nhẹ hơn chỉ bằng cách ở cạnh họ.",
      "Bạn can đảm nói ra những điều người khác ngại nói.",
      "Bạn quan sát giỏi, dù ngoài mặt có vẻ vô tư.",
    ],
    watchouts: [
      "Bạn dễ giấu nhu cầu của mình sau một câu đùa.",
      "Bạn nhận quá nhiều việc vì không muốn làm ai thất vọng.",
      "Bạn thường sụp xuống trong im lặng, một mình.",
    ],
    firstAid: [
      {
        title: "Mười phút im lặng có chủ đích",
        body: "Không nhạc, không màn hình. Ngồi ở một góc quen và để đầu óc trống. Im lặng không phải là bị bỏ rơi.",
        minutes: 10,
      },
      {
        title: "Viết điều bạn đang giấu",
        body: "Một câu thôi: “Thật ra mình đang…” Viết xong không cần cho ai xem. Chỉ cần để nó ra khỏi đầu.",
        minutes: 5,
      },
      {
        title: "Nói thật một câu",
        body: "Chọn một người an toàn và nói: “Hôm nay mình không ổn lắm.” Không cần giải thích thêm nếu bạn chưa muốn.",
        minutes: 10,
      },
      {
        title: "Thở chậm 4–6",
        body: "Hít vào 4 nhịp, thở ra 6 nhịp, làm mười lần. Đây là cách cơ thể báo cho não rằng bạn đang an toàn.",
        minutes: 5,
      },
      {
        title: "Tắm hoặc rửa mặt nước ấm",
        body: "Cho cơ thể một dấu hiệu chăm sóc cụ thể. Sau đó ngồi yên 5 phút, không cầm điện thoại.",
        minutes: 15,
      },
    ],
    weeklyHabits: [
      "Mỗi ngày, dành 10 phút không nói gì và không mở mạng.",
      "Mỗi ngày, nói một câu thật thay vì một câu đùa.",
      "Trước khi giúp ai, tự hỏi: “Mình có đủ sức không?”",
      "Ba tối trong tuần, đi ngủ sớm hơn 30 phút.",
    ],
    phrasesToShare: [
      "Con trông ổn nhưng bên trong hơi mệt, con muốn nói thật với bố mẹ.",
      "Con không cần bố mẹ làm gì, chỉ cần đừng cười khi con nói con không ổn.",
      "Hôm nay con không muốn làm người vui vẻ, con muốn được im một lúc.",
    ],
    neighbors: ["EFDV", "ESDA"],
  },
  {
    code: "EFRV",
    name: "Kẻ Nổi Loạn Thầm Lặng",
    slogan: "Bạn không muốn phá vỡ mọi thứ — bạn chỉ muốn được là chính mình.",
    color: "#D9803F",
    tint: "#FDF1E5",
    summary:
      "Bạn đang ở giai đoạn muốn tự quyết định nhiều thứ, nhưng ở nhà, mọi lựa chọn nhỏ nhất cũng có thể thành một cuộc tranh luận. Cơn bực bội của bạn không phải vì bạn hư; nó xuất hiện khi bạn cảm thấy mình không được lắng nghe. Bạn vẫn làm bài, vẫn đi học, vẫn cố tỏ ra bình thường, nhưng bên trong là một sợi dây đang căng. Bạn dễ cáu, dễ đóng cửa, rồi tự trách vì đã phản ứng mạnh. Mạng xã hội là nơi bạn thấy những người trẻ khác được sống theo cách họ muốn, và điều đó vừa truyền cảm hứng vừa làm bạn bứt rứt. Bạn không cần phải chọn giữa việc yêu gia đình và việc là chính mình. Bạn có một ý chí mạnh, cảm giác công bằng rõ ràng và khả năng đứng lên vì điều mình tin. Những phẩm chất đó rất quý; điều bạn đang học là dùng chúng để xây một cánh cửa, thay vì chỉ đẩy bức tường.",
    stressStyle:
      "Khi mọi thứ quá tải, bạn dễ cáu rồi im lặng, đóng cửa, và thấy mình vô lý dù bên trong chỉ muốn được tôn trọng.",
    strengths: [
      "Bạn có cảm giác rõ ràng về điều gì công bằng và điều gì không.",
      "Bạn kiên trì với những gì mình tin, kể cả khi bị phản đối.",
      "Bạn đang hình thành một bản sắc riêng, và điều đó cần thời gian.",
    ],
    watchouts: [
      "Bạn dễ để cơn giận nói thay mình.",
      "Bạn có thể thu mình thay vì nói ra điều đang cần.",
      "Bạn đẩy sự giúp đỡ ra xa vì sợ bị kiểm soát.",
    ],
    firstAid: [
      {
        title: "Xả lực bằng cơ thể",
        body: "Vận động mạnh 10 phút: chống đẩy, nhảy, đi bộ nhanh. Cơ thể tiêu bớt năng lượng thì lời nói bớt sắc.",
        minutes: 10,
      },
      {
        title: "Nước lạnh trên tay",
        body: "Để tay dưới vòi nước mát trong 30 giây, chú ý cảm giác. Đây là cách ngắt mạch cơn bực đang dâng.",
        minutes: 5,
      },
      {
        title: "Viết lá thư không gửi",
        body: "Viết hết những gì bạn muốn nói với người làm bạn bực. Không sửa, không gửi. Chỉ để cơn giận có chỗ ra.",
        minutes: 10,
      },
      {
        title: "Kể tên ba điều bạn cần",
        body: "Ví dụ: được hỏi trước, được thử, được nói xong. Chọn một điều nhỏ nhất để nói ra hôm nay.",
        minutes: 5,
      },
      {
        title: "Tự quyết một việc nhỏ",
        body: "Chọn một việc bạn có thể tự làm mà không cần xin phép. Cảm giác tự chủ đến từ những bước rất nhỏ.",
        minutes: 10,
      },
    ],
    weeklyHabits: [
      "Mỗi ngày, ra khỏi nhà 10 phút để có khoảng thở riêng.",
      "Mỗi tuần, nói một ranh giới bằng giọng bình tĩnh.",
      "Mỗi tuần, tự quyết một việc nhỏ và chịu trách nhiệm với nó.",
      "Đi ngủ trước 12 giờ ba tối trong tuần.",
    ],
    phrasesToShare: [
      "Con không muốn cãi. Con muốn mình nói chuyện khi cả hai bình tĩnh.",
      "Con cần bố mẹ tin con ở một vài việc nhỏ.",
      "Điều bố mẹ nói khiến con thấy mình không được lắng nghe.",
    ],
    neighbors: ["EFRA", "ESRV"],
  },
  {
    code: "EFRA",
    name: "Ngọn Núi Lửa Mệt Mỏi",
    slogan: "Cơn giận của bạn đang cố bảo vệ một điều rất mềm.",
    color: "#9B4B3A",
    tint: "#F5E3DD",
    summary:
      "Bạn có một nguồn cảm xúc mạnh và chân thật. Khi vui, bạn tràn đầy; khi bực, mọi thứ dâng lên rất nhanh. Ở nhà, những kỳ vọng và những lần không được hiểu có thể khiến bạn bùng lên rồi kiệt sức ngay sau đó. Bạn không phải người khó tính; bạn là người đã phải gồng quá lâu. Cơ thể bạn cũng đang ghi lại những căng thẳng đó bằng những cơn mệt, đau đầu hoặc giấc ngủ chập chờn. Bạn thường cảm thấy bế tắc vì không biết nói thế nào để người lớn hiểu mà không thành cãi vã. Đáng quý là tình cảm của bạn rất sâu. Bạn trung thành, biết bênh vực người mình thương và không dễ quay lưng. Bạn không cần nén mọi thứ lại, cũng không cần nổ tung. Bạn cần những khoảng nghỉ nhỏ, một người lớn đáng tin và cách nói ra nhu cầu trước khi cơn lửa chạm đỉnh.",
    stressStyle:
      "Khi mọi thứ quá tải, cảm xúc của bạn dâng lên rất nhanh, có thể nói những điều mình không muốn, rồi cơ thể sụp xuống và bạn thấy có lỗi.",
    strengths: [
      "Bạn sống với cảm xúc mãnh liệt, và điều đó khiến bạn rất chân thành.",
      "Bạn trung thành với người mình thương và sẵn sàng bảo vệ họ.",
      "Bạn nhận ra điều không ổn nhanh hơn nhiều người.",
    ],
    watchouts: [
      "Bạn dễ bùng nổ rồi tự trách trong im lặng.",
      "Bạn có thể bỏ qua tín hiệu mệt của cơ thể cho đến khi quá muộn.",
      "Bạn dễ cảm thấy kẹt trong những cuộc nói chuyện lặp lại.",
    ],
    firstAid: [
      {
        title: "Rời khỏi phòng 10 phút",
        body: "Nói một câu ngắn: “Con cần ra ngoài một chút.” Đi bộ, hít thở. Quay lại khi giọng đã dịu hơn.",
        minutes: 10,
      },
      {
        title: "Thở ra dài hơn hít vào",
        body: "Đặt tay lên bụng, hít 4 nhịp, thở 6 nhịp, làm mười lần. Cơ thể sẽ báo cho bạn biết mình đang an toàn.",
        minutes: 5,
      },
      {
        title: "Xả lực bằng tay",
        body: "Bóp một chiếc khăn, đấm vào gối, hoặc đẩy tường 10 giây. Cho cơ thể một lối ra an toàn.",
        minutes: 5,
      },
      {
        title: "Viết trước khi nói",
        body: "Viết ba câu bạn muốn nói nhất, rồi gạch bỏ những câu chỉ để làm đau. Giữ lại một câu thật.",
        minutes: 10,
      },
      {
        title: "Gọi một người lớn đáng tin",
        body: "Không cần kể hết. Chỉ cần nói: “Con đang rất mệt và con cần ai đó nghe con.” Nếu cần, gọi 111.",
        minutes: 15,
      },
    ],
    weeklyHabits: [
      "Cứ 90 phút, đứng lên và thở 3 phút.",
      "Mỗi tuần, nói “con cần nghỉ” một lần trước khi kiệt sức.",
      "Mỗi ngày, vận động 10 phút để xả bớt năng lượng.",
      "Ba tối trong tuần, tắt màn hình sớm hơn 30 phút.",
    ],
    phrasesToShare: [
      "Con đang rất tức, con cần ra ngoài một lúc rồi mình nói tiếp.",
      "Con không muốn làm bố mẹ đau, nhưng con cũng đang đau.",
      "Mình có thể nói chuyện này sau không?",
    ],
    neighbors: ["EFRV", "IFRA"],
  },
  {
    code: "ESDV",
    name: "Nhà Thám Hiểm Lạc Hướng",
    slogan: "Bạn không lạc đường — bạn chỉ đang đổi bản đồ.",
    color: "#C79426",
    tint: "#FDF6E4",
    summary:
      "Bạn là người nhiều năng lượng và nhiều ý tưởng. Bạn thích thử, thích khám phá và thường là người rủ mọi người làm điều mới. Nhưng càng lớn, bạn càng đặt cho mình những tiêu chuẩn cao hơn, đến mức mỗi lựa chọn đều giống như một bài kiểm tra. Bạn có thể dành hàng giờ để tìm hiểu, lên kế hoạch và so sánh, rồi lại lướt mạng để nghỉ, rồi thấy có lỗi vì đã nghỉ. Điều bạn đang trải qua không phải là thiếu mục tiêu; bạn có quá nhiều hướng và sợ chọn sai. Bạn cũng đang học cách tách tiếng nói của mình khỏi tiếng nói của người xung quanh. Bạn có sự tò mò, khả năng khởi đầu và một niềm tin rằng mọi thứ có thể tốt hơn. Những phẩm chất đó sẽ đưa bạn đi rất xa nếu bạn cho phép mình đi chậm lại, chọn một bước nhỏ và không biến việc nghỉ ngơi thành một thất bại.",
    stressStyle:
      "Khi mọi thứ quá tải, bạn nạp thêm video, thêm kế hoạch, thêm mục tiêu; đến khi mệt thì tự trách vì đã “phí thời gian”.",
    strengths: [
      "Bạn có sự tò mò và dám thử những điều người khác còn ngại.",
      "Bạn biết cách khởi động và kéo người khác cùng đi.",
      "Bạn nhìn thấy nhiều khả năng, kể cả khi mọi thứ còn mờ.",
    ],
    watchouts: [
      "Bạn dễ lên kế hoạch nhiều hơn là bắt đầu.",
      "Bạn biến việc nghỉ ngơi thành cảm giác có lỗi.",
      "Bạn so sánh tốc độ của mình với tốc độ của người khác.",
    ],
    firstAid: [
      {
        title: "Nghỉ 10 phút không màn hình",
        body: "Đặt điện thoại úp xuống. Ngồi ở đâu đó có ánh sáng tự nhiên. Không cần làm gì cả. Nghỉ cũng là một việc.",
        minutes: 10,
      },
      {
        title: "Chọn một bước nhỏ nhất",
        body: "Viết ra ba việc, khoanh một việc mất dưới 10 phút. Làm nó. Tiến độ nhỏ vẫn là tiến độ.",
        minutes: 10,
      },
      {
        title: "Viết danh sách đã làm",
        body: "Liệt kê năm việc bạn đã hoàn thành hôm nay, dù rất nhỏ. Đây là bằng chứng bạn không đứng yên.",
        minutes: 5,
      },
      {
        title: "Đi bộ không mục tiêu",
        body: "Đi 12 phút mà không đếm bước, không nghe podcast. Chỉ để cơ thể dẫn đường.",
        minutes: 12,
      },
      {
        title: "Nhắn một người bạn",
        body: "Không cần hỏi han gì lớn. Chỉ cần nói: “Dạo này mình hơi rối, bạn thế nào?” Kết nối làm dịu sự so sánh.",
        minutes: 10,
      },
    ],
    weeklyHabits: [
      "Mỗi ngày, chọn một mục tiêu duy nhất thay vì năm.",
      "Mỗi ngày, giữ 10 phút không màn hình.",
      "Mỗi tuần, dành một buổi không kế hoạch.",
      "Ba tối trong tuần, ngủ đủ giấc thay vì học thêm.",
    ],
    phrasesToShare: [
      "Con đang thử nhiều thứ và hơi rối, con cần bố mẹ hỏi con muốn gì trước.",
      "Con không cần phải giỏi mọi thứ, con đang học cách chọn.",
      "Cho con thử và sai một lần nhé.",
    ],
    neighbors: ["ESDA", "ISDV"],
  },
  {
    code: "ESDA",
    name: "Ngôi Sao Mờ Màn Hình",
    slogan: "Bạn đã cố gắng nhiều hơn bạn nhớ. Hôm nay thử dịu lại một chút.",
    color: "#B07B1C",
    tint: "#FAF0DC",
    summary:
      "Bạn là người sôi nổi, dễ gần và thường được nhìn thấy ở những nơi đông người. Bạn có thể nói chuyện với nhiều kiểu người, làm người khác cười, và tỏ ra mình xoay xở được mọi thứ. Nhưng bên trong, bạn có một giọng nói rất khắt khe, thường nhắc bạn rằng mình chưa đủ. Bạn tự đặt tiêu chuẩn, rồi tự trách khi không đạt. Khi mệt, bạn mở màn hình để bớt nghe giọng nói đó, nhưng lướt xong lại thấy trống và càng trách mình hơn. Bạn cũng đang cố giữ hình ảnh một người luôn ổn, vì sợ làm người khác thất vọng. Điều bạn cần không phải là cố thêm, mà là được nhìn thấy cả phần mệt mỏi. Bạn có sự ấm áp, sự nhạy cảm với cảm xúc của người khác và một sức bền đáng ngạc nhiên. Khi bạn cho phép mình được nghỉ mà không phải chứng minh gì, bạn sẽ nhẹ hơn rất nhiều.",
    stressStyle:
      "Khi mọi thứ quá tải, bạn càng hoạt động, càng cười, rồi tối đến lướt mạng rất lâu để khỏi phải nghe tiếng tự trách.",
    strengths: [
      "Bạn đem lại năng lượng và sự dễ chịu cho người xung quanh.",
      "Bạn rất tinh ý với cảm xúc của người khác.",
      "Bạn có sức bền và khả năng đứng dậy sau những lần mệt.",
    ],
    watchouts: [
      "Bạn dễ nói với mình những điều bạn sẽ không nói với một người bạn.",
      "Bạn che sự mệt bằng hoạt động và màn hình.",
      "Bạn sợ làm người khác thất vọng hơn sợ làm mình kiệt sức.",
    ],
    firstAid: [
      {
        title: "Gọi tên tiếng nói tự trách",
        body: "Viết ra câu bạn đang tự nói với mình, rồi hỏi: “Mình có nói thế với bạn thân không?” Nếu không, nó không cần phải là sự thật.",
        minutes: 10,
      },
      {
        title: "Năm phút ngoài trời",
        body: "Ra ban công hoặc sân, nhìn trời 5 phút. Ánh sáng tự nhiên giúp cơ thể và tâm trí hạ nhịp.",
        minutes: 5,
      },
      {
        title: "Hoàn thành một việc rất nhỏ",
        body: "Gấp chăn, rửa cốc, gửi một tin nhắn đang chờ. Một việc xong giúp bạn thoát khỏi cảm giác mắc kẹt.",
        minutes: 5,
      },
      {
        title: "Nhắn một người thật",
        body: "Chọn người mà bạn không cần phải tỏ ra mạnh. Nói: “Hôm nay mình hơi đuối.” Không cần thêm gì.",
        minutes: 10,
      },
      {
        title: "Mười lăm phút không máy",
        body: "Để điện thoại ở phòng khác, làm một việc bằng tay: tưới cây, xếp sách, vẽ nguệch ngoạc. Chỉ 15 phút.",
        minutes: 15,
      },
    ],
    weeklyHabits: [
      "Mỗi ngày, ghi lại ba việc nhỏ đã làm được.",
      "Mỗi ngày, nói “mình đang cố” thay vì “mình phải”.",
      "Mỗi tuần, chọn một ngày không so sánh mình với ai.",
      "Ba tối trong tuần, ngủ trước giờ bạn thường thức.",
    ],
    phrasesToShare: [
      "Hôm nay con không ổn lắm, con chỉ cần bố mẹ đừng hỏi thêm.",
      "Con đang cố rồi, con cần được khen một chút.",
      "Con không muốn bố mẹ lo, nhưng con cũng cần được giúp.",
    ],
    neighbors: ["ESDV", "ISDA"],
  },
  {
    code: "ESRV",
    name: "Vận Động Viên Quá Tải",
    slogan: "Nghỉ ngơi không phải là bỏ cuộc. Đó là cách bạn giữ sức cho chặng dài.",
    color: "#9A7526",
    tint: "#F7EFDD",
    summary:
      "Bạn là người tự giác, có mục tiêu và thường là người mà người khác tin sẽ hoàn thành việc. Bạn không cần ai nhắc, vì bạn đã tự nhắc mình nhiều hơn bất kỳ ai. Nhưng chính vì vậy, bạn khó cho mình nghỉ. Bạn có thể đang học tốt, tham gia nhiều hoạt động, và vẫn thấy chưa đủ. Cơ thể bạn bắt đầu gửi tín hiệu: mệt dù không làm gì nặng, căng vai, khó ngủ. Bạn thường bỏ qua những tín hiệu đó vì còn một việc nữa cần xong. Bạn không lười; bạn đang đối xử với mình như một cỗ máy không cần bảo trì. Bạn có kỷ luật, sự bền bỉ và khả năng tập trung mà nhiều người ao ước. Nhưng sức mạnh bền vững cần những khoảng nghỉ thật. Bạn không cần giảm giá trị của mình; bạn chỉ cần học cách giữ sức cho những điều quan trọng dài hạn.",
    stressStyle:
      "Khi mọi thứ quá tải, bạn không dừng lại mà tăng tốc; cơ thể mệt thì bạn đổi sang việc nhẹ hơn, chứ hiếm khi cho mình nghỉ thật.",
    strengths: [
      "Bạn có kỷ luật và độ tin cậy cao.",
      "Bạn bền bỉ, biết cách theo đuổi mục tiêu dài hơi.",
      "Bạn có khả năng tập trung và hoàn thành việc mình đã nhận.",
    ],
    watchouts: [
      "Bạn dễ gắn giá trị bản thân với năng suất.",
      "Bạn bỏ qua tín hiệu mệt của cơ thể.",
      "Bạn khó nghỉ ngơi mà không thấy có lỗi.",
    ],
    firstAid: [
      {
        title: "Quét cơ thể 10 phút",
        body: "Nằm yên, đi từ bàn chân lên đầu, chú ý nơi đang căng. Không cần sửa, chỉ cần nhận ra.",
        minutes: 10,
      },
      {
        title: "Hoãn đúng một việc",
        body: "Chọn một việc không khẩn cấp và dời nó sang mai. Việc thế giới không sụp đổ là một bài học quan trọng.",
        minutes: 5,
      },
      {
        title: "Ngủ 20 phút",
        body: "Đặt báo thức, nằm xuống, không màn hình. Một giấc ngắn giúp não xử lý tốt hơn hai giờ cố.",
        minutes: 20,
      },
      {
        title: "Giãn vai gáy",
        body: "Nghiêng đầu nhẹ sang hai bên, giữ 20 giây mỗi bên. Xoay vai chậm. Cơ thể bạn đã gồng rất lâu.",
        minutes: 5,
      },
      {
        title: "Nói với một người tin cậy",
        body: "Chỉ cần nói: “Mình đang mệt thật.” Không cần kể thành tích. Được nghe mà không bị đánh giá cũng là nghỉ.",
        minutes: 10,
      },
    ],
    weeklyHabits: [
      "Mỗi ngày, đặt một khoảng nghỉ không màn hình.",
      "Mỗi tuần, chọn một ngày nhẹ hơn và giữ đúng lời hứa đó.",
      "Mỗi ngày, vận động nhẹ 10 phút để xả căng.",
      "Ngủ đủ 7–8 tiếng ít nhất bốn đêm mỗi tuần.",
    ],
    phrasesToShare: [
      "Con đang mệt thật, con cần nghỉ chứ không phải cố thêm.",
      "Con muốn bố mẹ giúp con bớt một việc, không phải làm hộ.",
      "Cho con một buổi không học cũng được không?",
    ],
    neighbors: ["ESRA", "ISRV"],
  },
  {
    code: "ESRA",
    name: "Chiến Binh Gục Giữa Sân",
    slogan: "Bạn đã gánh rất lâu rồi. Giờ là lúc để ai đó gánh cùng bạn.",
    color: "#7E5E1F",
    tint: "#F1E9D9",
    summary:
      "Bạn là người đã cố rất nhiều, có khi nhiều hơn bạn kể. Bạn tự đặt mục tiêu, tự nhắc mình phải mạnh, và thường là người khác thấy ổn trước khi bạn thấy ổn. Nhưng dạo này mọi thứ nặng hơn. Cơ thể bạn mệt, đầu óc khó tập trung, và có những ngày bạn chỉ muốn nằm yên. Bạn có thể thấy mình đang tụt lại, dù thật ra bạn đã đi rất xa. Bạn không cần phải giữ hình ảnh một người luôn mạnh. Bạn cũng không cần phải chứng minh rằng mình xứng đáng được nghỉ. Bạn có sự can đảm, sự bền bỉ và một trái tim biết quan tâm. Nhưng lúc này, điều quan trọng nhất không phải là cố thêm một chút, mà là nói với một người lớn đáng tin rằng bạn đang cần giúp. Bạn xứng đáng được nâng đỡ, và việc tìm người đồng hành là một bước đi mạnh mẽ, không phải một thất bại.",
    stressStyle:
      "Khi mọi thứ quá tải, bạn cố thêm một chút nữa, rồi sụp xuống; lúc đó bạn thu mình và thấy khó nói ra rằng mình đang cần giúp.",
    strengths: [
      "Bạn có sức bền và đã vượt qua nhiều điều khó.",
      "Bạn trung thành và biết quan tâm đến người khác.",
      "Bạn trung thực với cảm giác mệt của mình, dù khó nói ra.",
    ],
    watchouts: [
      "Bạn có thể thu mình đúng lúc cần người khác nhất.",
      "Bạn dễ coi việc cần giúp là một thất bại.",
      "Bạn thường đợi đến khi cơ thể không cho phép mới dừng.",
    ],
    firstAid: [
      {
        title: "Dừng lại trong 5 phút",
        body: "Đặt điện thoại xuống, ngồi yên, thở chậm. Không cần giải quyết gì trong 5 phút này. Bạn đang cho cơ thể nghỉ.",
        minutes: 5,
      },
      {
        title: "Nói với một người lớn đáng tin",
        body: "Bố mẹ, thầy cô, người thân hoặc một người bạn lớn tuổi. Câu mở đầu: “Con đang rất mệt và con cần bố mẹ giúp con.”",
        minutes: 15,
      },
      {
        title: "Uống nước và ăn một chút",
        body: "Đôi khi cơ thể sụp vì thiếu những điều rất cơ bản. Một cốc nước và một bữa nhỏ có thể giúp bạn dễ chịu hơn.",
        minutes: 10,
      },
      {
        title: "Viết ba điều mình cần",
        body: "Không cần dài. Ví dụ: được nghỉ, được nghe, được giúp một việc. Đưa danh sách đó cho người bạn tin.",
        minutes: 10,
      },
      {
        title: "Gọi 111 nếu bạn cần ai đó ngay",
        body: "Tổng đài quốc gia bảo vệ trẻ em hoạt động 24/7. Bạn không cần biết nói gì trước; chỉ cần bắt đầu bằng “Con cần giúp”.",
        minutes: 10,
      },
    ],
    weeklyHabits: [
      "Mỗi ngày, thực hành nói “mình cần giúp” với một việc nhỏ.",
      "Mỗi ngày, ra ngoài 10 phút để cơ thể có ánh sáng.",
      "Ba tối trong tuần, ưu tiên giấc ngủ hơn bài tập.",
      "Mỗi tuần, nhắn cho một người lớn đáng tin một lần.",
    ],
    phrasesToShare: [
      "Con đang không ổn và con cần bố mẹ ở bên, không cần hỏi nhiều.",
      "Con cần nghỉ, không phải cố thêm.",
      "Con muốn nói chuyện với người lớn, bố mẹ giúp con tìm được không?",
    ],
    neighbors: ["ESRV", "ISRA"],
  },
  {
    code: "IFDV",
    name: "Người Viết Thư Không Gửi",
    slogan: "Bạn đã viết rất nhiều điều chưa gửi. Một ngày nào đó, một câu thôi cũng đủ.",
    color: "#587E51",
    tint: "#F0F5EE",
    summary:
      "Bạn là người quan sát nhiều hơn nói. Bạn để ý những thay đổi nhỏ, nhớ những câu người khác nói, và thường hiểu mọi chuyện trước khi ai đó kịp giải thích. Cảm xúc của bạn không hề nông; nó chỉ ở trong một căn phòng mà bạn chưa mở cửa. Ở nhà, những kỳ vọng có thể khiến bạn học cách im lặng để tránh va chạm. Bạn trốn vào mạng để có khoảng riêng, nhưng cũng biết mình đang chờ một điều gì đó khác. Bạn muốn thay đổi, chỉ là chưa biết bắt đầu mà không làm mọi thứ rối lên. Bạn có chiều sâu, sự đồng cảm và khả năng nhìn thấy điều người khác bỏ qua. Bạn không cần phải trở thành người nói nhiều. Bạn chỉ cần gửi một câu thật, cho một người thật, và cho mình cơ hội được nghe lại.",
    stressStyle:
      "Khi mọi thứ quá tải, bạn viết rất nhiều nhưng không gửi; bạn thu mình, lướt mạng, và để mọi thứ lắng thành một nỗi nặng âm thầm.",
    strengths: [
      "Bạn có chiều sâu cảm xúc và khả năng tự quan sát tốt.",
      "Bạn tinh tế với những điều người khác không để ý.",
      "Bạn trung thành và biết giữ điều người khác tin tưởng.",
    ],
    watchouts: [
      "Bạn dễ giữ nhu cầu của mình trong im lặng.",
      "Bạn có thể chờ người khác hiểu mà không nói ra.",
      "Bạn dùng màn hình để trì hoãn một cuộc nói chuyện cần thiết.",
    ],
    firstAid: [
      {
        title: "Viết ba câu chưa gửi",
        body: "Viết những gì bạn muốn nói, không cần hay. Sau đó khoanh một câu bạn có thể nói thành tiếng hôm nay.",
        minutes: 10,
      },
      {
        title: "Ghi âm một đoạn ngắn",
        body: "Nói vào điện thoại 60 giây, không gửi cho ai. Nghe lại để thấy mình đã nói ra được. Xóa sau đó cũng được.",
        minutes: 5,
      },
      {
        title: "Đi bộ và quan sát",
        body: "Đi 12 phút, chú ý ba chi tiết bạn thường bỏ qua. Cảm xúc dễ chảy hơn khi cơ thể chuyển động.",
        minutes: 12,
      },
      {
        title: "Xin mười phút nói chuyện",
        body: "Nhắn cho người bạn tin: “Mình có chuyện muốn nói, bạn cho mình mười phút được không?” Đặt khung giờ giúp bạn dễ mở lời.",
        minutes: 10,
      },
      {
        title: "Chọn một thay đổi nhỏ",
        body: "Không cần đổi cả cuộc sống. Chọn một việc: ngủ sớm hơn, nói một câu thật, hoặc ra ngoài mỗi ngày. Bắt đầu từ đó.",
        minutes: 5,
      },
    ],
    weeklyHabits: [
      "Mỗi ngày, viết 5 phút không cần đọc lại.",
      "Mỗi tuần, gửi một câu thật cho một người thật.",
      "Mỗi ngày, ra ngoài 10 phút mà không mang tai nghe.",
      "Mỗi tuần, thử một điều nhỏ nằm ngoài vùng quen.",
    ],
    phrasesToShare: [
      "Con có chuyện muốn nói nhưng con sợ bố mẹ phản ứng mạnh. Bố mẹ nghe con trước được không?",
      "Con không cần bố mẹ đồng ý ngay, con chỉ cần bố mẹ đừng giận.",
      "Con đang cố nói ra, bố mẹ kiên nhẫn với con một chút.",
    ],
    neighbors: ["IFDA", "ISDV"],
  },
  {
    code: "IFDA",
    name: "Người Gác Đền Cô Độc",
    slogan: "Bạn không cần ở ngoài kia ngay. Chỉ cần mở một cánh cửa nhỏ.",
    color: "#3F5B4A",
    tint: "#EAF0EA",
    summary:
      "Bạn là người cần nhiều khoảng riêng để thấy an toàn. Phòng của bạn, tai nghe, màn hình và những đêm yên tĩnh là nơi bạn có thể thở. Ở nhà, những câu hỏi về học hành hoặc tương lai có thể khiến bạn muốn đóng cửa hơn là giải thích. Bạn chơi game, xem video hoặc lướt đến khuya không hẳn vì thích, mà vì đó là cách để không phải đối diện với cảm giác nặng. Bạn thấy cô đơn ngay cả khi online, nhưng việc mở lời lại có vẻ quá khó. Bạn không lạnh lùng; bạn đang tự bảo vệ mình bằng cách ít tiếp xúc. Bạn có khả năng tập trung, sự độc lập và một thế giới nội tâm phong phú. Bạn không cần thay đổi con người mình. Bạn chỉ cần một cánh cửa nhỏ mở ra mỗi ngày, để ai đó có thể gõ và bạn có thể chọn trả lời.",
    stressStyle:
      "Khi mọi thứ quá tải, bạn đóng cửa, chơi game hoặc lướt đến khuya; bạn cảm thấy an toàn hơn khi không ai hỏi, nhưng cô đơn lại lớn thêm.",
    strengths: [
      "Bạn có khả năng tập trung sâu và tự làm việc một mình rất tốt.",
      "Bạn độc lập và biết cách tự xoay xở.",
      "Bạn có một thế giới nội tâm phong phú, đầy điều để khám phá.",
    ],
    watchouts: [
      "Bạn dễ dùng màn hình để tránh một cuộc trò chuyện.",
      "Bạn có thể để giấc ngủ bị kéo lệch mà không nhận ra.",
      "Bạn thu mình lâu đến mức việc mở lời càng khó hơn.",
    ],
    firstAid: [
      {
        title: "Mở cửa sổ 5 phút",
        body: "Để không khí mới vào phòng. Nhìn ra ngoài. Bạn không cần ra khỏi nhà ngay, chỉ cần mở một khoảng.",
        minutes: 5,
      },
      {
        title: "Nhắn đúng một người",
        body: "Chọn người an toàn nhất. Chỉ cần một sticker hoặc câu: “Dạo này thế nào?” Bạn không phải kể gì nếu chưa muốn.",
        minutes: 10,
      },
      {
        title: "Tắm nước ấm",
        body: "Cho cơ thể một tín hiệu chăm sóc. Sau đó ăn một chút và uống nước. Cơ thể được chăm sẽ dễ chịu hơn.",
        minutes: 15,
      },
      {
        title: "Đặt một giới hạn cho đêm nay",
        body: "Chọn một giờ dừng màn hình, sớm hơn 30 phút so với thường lệ. Chỉ đêm nay thôi cũng được.",
        minutes: 5,
      },
      {
        title: "Hẹn một việc rất nhỏ với người khác",
        body: "Mua trà cùng nhau, đi bộ 10 phút, hoặc ngồi chung một lúc. Có hẹn giúp việc gặp gỡ nhẹ hơn.",
        minutes: 15,
      },
    ],
    weeklyHabits: [
      "Mỗi ngày, ra khỏi phòng 10 phút.",
      "Mỗi ngày, gửi một tin nhắn cho một người.",
      "Ba tối trong tuần, đặt điện thoại xa giường.",
      "Mỗi tuần, có một buổi gặp người thật, dù rất ngắn.",
    ],
    phrasesToShare: [
      "Con không muốn nói chuyện lâu, nhưng bố mẹ ngồi với con một chút được không?",
      "Con đang thu mình, không phải con ghét bố mẹ.",
      "Con cần một người để nói, con chưa biết bắt đầu từ đâu.",
    ],
    neighbors: ["IFDV", "ISDA"],
  },
  {
    code: "IFRV",
    name: "Người Giữ Lửa Âm Thầm",
    slogan: "Bạn giữ lửa cho người khác rất giỏi. Hôm nay thử giữ lại một chút cho mình.",
    color: "#6E9362",
    tint: "#F1F6EE",
    summary:
      "Bạn là người nhẫn nại và đáng tin. Khi gia đình có chuyện, bạn thường là người chịu phần khó mà không kể. Bạn hiểu kỳ vọng của bố mẹ, cố gắng đáp ứng, và học cách nuốt những điều khiến mình khó chịu để giữ hòa khí. Bên ngoài, bạn vẫn đi học, vẫn hoàn thành việc, vẫn tiến về phía trước. Nhưng cơ thể bạn đang căng, và đôi khi bạn thấy mệt hơn mức mình thừa nhận. Bạn không giận ai; bạn chỉ mệt vì phải giữ quá nhiều. Bạn có sự kiên nhẫn, lòng trung thành và một sức mạnh rất bền. Nhưng sức mạnh đó cũng cần được tiếp thêm. Bạn không cần phải chọn giữa việc thương gia đình và việc thương mình. Nói ra một ranh giới nhỏ, xin giúp một việc, hoặc cho mình một buổi nghỉ là những cách giữ ngọn lửa lâu hơn.",
    stressStyle:
      "Khi mọi thứ quá tải, bạn nhẫn thêm, làm thêm, và để cơ thể gánh; đến một lúc bạn thấy mình cạn mà không ai biết.",
    strengths: [
      "Bạn kiên nhẫn và giữ được bình tĩnh trong nhiều tình huống.",
      "Bạn là người đáng tin, biết lo cho người khác.",
      "Bạn có sức mạnh âm thầm và khả năng đi đường dài.",
    ],
    watchouts: [
      "Bạn dễ để oán nhẹ tích tụ vì không nói ra.",
      "Bạn coi nhu cầu của mình là thứ có thể xếp sau.",
      "Bạn bỏ qua căng thẳng cho đến khi cơ thể báo động.",
    ],
    firstAid: [
      {
        title: "Giãn vai và hàm",
        body: "Nâng vai lên, giữ 5 giây rồi thả. Mở hàm nhẹ. Bạn có thể đang nghiến răng mà không biết.",
        minutes: 5,
      },
      {
        title: "Nói một ranh giới nhỏ",
        body: "Chọn một câu ngắn: “Con giúp được việc này, nhưng con cần nghỉ trước.” Ranh giới không cần phải to.",
        minutes: 10,
      },
      {
        title: "Mười phút một mình",
        body: "Không điện thoại, không nhiệm vụ. Ngồi ở đâu đó yên. Bạn đang cho mình quyền không phục vụ ai.",
        minutes: 10,
      },
      {
        title: "Viết điều bạn chưa nói",
        body: "Ba dòng về điều bạn đã nhịn. Không cần gửi. Chỉ cần để nó không còn nằm nguyên trong ngực.",
        minutes: 10,
      },
      {
        title: "Nhờ một việc cụ thể",
        body: "Không nói chung chung. Ví dụ: “Bố giúp con rửa bát tối nay được không?” Nhờ rõ ràng dễ được giúp hơn.",
        minutes: 5,
      },
    ],
    weeklyHabits: [
      "Mỗi tuần, nói “không” hoặc “để mai” một lần.",
      "Mỗi ngày, thở chậm 3 phút trước khi vào việc mới.",
      "Ba tối trong tuần, ngủ đủ giấc.",
      "Mỗi tuần, nhờ một người giúp một việc nhỏ.",
    ],
    phrasesToShare: [
      "Con có thể giúp, nhưng con cần bố mẹ hỏi con trước.",
      "Con đang mệt, con muốn nghỉ một buổi.",
      "Con không giận, con chỉ cần được lắng nghe.",
    ],
    neighbors: ["IFRA", "ISRV"],
  },
  {
    code: "IFRA",
    name: "Chiếc Bóng Nặng Trĩu",
    slogan: "Bạn không phải chiếc bóng. Bạn là người đang rất cần được nhìn thấy.",
    color: "#365033",
    tint: "#E9EFE7",
    summary:
      "Bạn là người sống nội tâm và thường giữ mọi thứ trong lòng. Những kỳ vọng của gia đình có thể đã trở thành một sức nặng quen thuộc, đến mức bạn không còn nhận ra mình đang gánh nó. Bạn im lặng, thu mình, và có những ngày chỉ muốn nằm yên. Bạn không cần phải giải thích lý do; cảm giác mệt của bạn là thật và đáng được lắng nghe. Bạn có thể thấy mọi lối ra đều xa, và việc mở lời có vẻ quá sức. Nhưng bạn không phải là người duy nhất cảm thấy như vậy, và bạn không cần đi qua chuyện này một mình. Bạn có sự tinh tế, lòng trung thành và một trái tim biết quan tâm sâu sắc. Lúc này, điều quan trọng nhất là để một người lớn đáng tin biết bạn đang cần giúp. Bạn xứng đáng được nâng đỡ, và việc tìm người đồng hành không làm bạn yếu đi; nó giúp bạn có thêm sức để thở.",
    stressStyle:
      "Khi mọi thứ quá tải, bạn im lặng gần như hoàn toàn, nằm lâu, và thấy mọi lối ra đều xa; bạn cần ai đó chủ động đến gần.",
    strengths: [
      "Bạn có sự tinh tế và khả năng hiểu cảm xúc sâu sắc.",
      "Bạn trung thành và biết giữ lời.",
      "Bạn đã bền bỉ đi qua nhiều điều mà không làm ồn.",
    ],
    watchouts: [
      "Bạn có thể thu mình đúng lúc cần người khác nhất.",
      "Bạn dễ nghĩ rằng mình là gánh nặng.",
      "Bạn khó nhận ra mình đã kiệt sức từ lâu.",
    ],
    firstAid: [
      {
        title: "Nói với một người lớn đáng tin",
        body: "Bố mẹ, thầy cô, ông bà, cô chú hoặc một người bạn lớn tuổi. Câu mở đầu có thể chỉ là: “Con đang rất mệt.”",
        minutes: 15,
      },
      {
        title: "Gọi 111 nếu bạn cần ai đó ngay",
        body: "Bạn không cần biết nói gì trước. Chỉ cần nói bạn cần được giúp. Tổng đài hoạt động 24/7.",
        minutes: 10,
      },
      {
        title: "Ra ngoài 10 phút",
        body: "Mở cửa, đi chậm, hít thở. Không cần đi xa. Ra khỏi bốn bức tường có thể làm dịu cảm giác bị kẹt.",
        minutes: 10,
      },
      {
        title: "Viết ba dòng",
        body: "Hôm nay mình cảm thấy… Mình cần… Một người có thể giúp mình là… Không cần viết tiếp nếu không muốn.",
        minutes: 10,
      },
      {
        title: "Ở gần một người",
        body: "Nếu chưa nói được, chỉ cần ngồi trong cùng phòng với một người bạn tin. Có mặt cũng là một dạng hỗ trợ.",
        minutes: 15,
      },
    ],
    weeklyHabits: [
      "Mỗi ngày, nói một câu ngắn với người an toàn.",
      "Mỗi ngày, ra ngoài 10 phút để có ánh sáng.",
      "Ba tối trong tuần, ưu tiên giấc ngủ.",
      "Mỗi tuần, để một người bạn tin biết bạn đang thế nào.",
    ],
    phrasesToShare: [
      "Con đang rất mệt, con cần bố mẹ giúp con tìm người để nói chuyện.",
      "Con không muốn giải thích nhiều, con chỉ cần bố mẹ ở đây.",
      "Con cần nghỉ, không phải mạnh mẽ thêm.",
    ],
    neighbors: ["IFRV", "ISRA"],
  },
  {
    code: "ISDV",
    name: "Kiến Trúc Sư Phòng Kín",
    slogan: "Bạn đã thiết kế được rất nhiều thứ. Cho phép mình thiết kế cả một chỗ để được giúp.",
    color: "#4E7C78",
    tint: "#EDF4F2",
    summary:
      "Bạn là người thích tự hiểu, tự sửa và tự chịu trách nhiệm. Bạn có tiêu chuẩn riêng, thường cao hơn điều người khác mong đợi, và bạn thấy khó chấp nhận một kết quả chỉ ở mức “tạm được”. Bạn ít chia sẻ, không phải vì không tin ai, mà vì bạn quen tự xử lý. Khi mệt, bạn lướt mạng để xả rồi quay lại cố hoàn thiện mọi thứ một mình. Bạn muốn cải thiện bản thân, và điều đó rất đáng quý, nhưng đôi khi nó biến thành việc không bao giờ thấy mình đủ. Bạn không cần hạ thấp tiêu chuẩn; bạn cần thêm một người nhìn cùng mình. Bạn có tư duy sắc bén, khả năng tự học và sự kiên trì đáng nể. Khi cho phép ai đó bước vào phòng làm việc của mình, bạn sẽ thấy việc được giúp không làm bạn yếu đi, mà làm bạn đi xa hơn.",
    stressStyle:
      "Khi mọi thứ quá tải, bạn tự khóa cửa, lướt mạng để xả, rồi quay lại cố hoàn thiện mọi thứ một mình.",
    strengths: [
      "Bạn có tư duy sắc bén và khả năng tự học rất tốt.",
      "Bạn kiên trì với những việc mình đã chọn.",
      "Bạn có khả năng tự quan sát và nhìn ra điều cần cải thiện.",
    ],
    watchouts: [
      "Bạn dễ để tiêu chuẩn cao biến thành tiếng tự trách.",
      "Bạn thu mình khi đang cần người khác nhất.",
      "Bạn có thể lướt mạng để xả thay vì thật sự nghỉ.",
    ],
    firstAid: [
      {
        title: "Chọn một việc “đủ tốt”",
        body: "Chọn một việc nhỏ và dừng ở mức 80%. Để cơ thể học rằng chưa hoàn hảo không có nghĩa là thất bại.",
        minutes: 10,
      },
      {
        title: "Hỏi một người một câu",
        body: "Không cần nhờ làm hộ. Chỉ cần hỏi: “Bạn thấy chỗ này thế nào?” Cho người khác cơ hội ở cạnh bạn.",
        minutes: 10,
      },
      {
        title: "Đi bộ 12 phút",
        body: "Không podcast, không mục tiêu. Để đầu óc chạy tự do. Những ý tưởng tốt thường đến khi bạn không cố.",
        minutes: 12,
      },
      {
        title: "Viết điều mình sợ nếu nghỉ",
        body: "Ba câu thôi. Nhìn vào điều sợ giúp nó bớt quyền lực. Nghỉ không xóa đi những gì bạn đã làm.",
        minutes: 10,
      },
      {
        title: "Ngủ sớm hơn 30 phút",
        body: "Đặt điện thoại xa giường. Một đêm ngủ đủ có thể đổi cách bạn nhìn mọi thứ vào sáng mai.",
        minutes: 15,
      },
    ],
    weeklyHabits: [
      "Mỗi ngày, có một việc dừng ở mức “đủ tốt”.",
      "Mỗi tuần, hỏi một người một câu thật lòng.",
      "Mỗi ngày, ra ngoài 10 phút không mục tiêu.",
      "Ba tối trong tuần, ngủ đủ giấc.",
    ],
    phrasesToShare: [
      "Con đang cố tự xử lý, nhưng con muốn thử nhờ bố mẹ một việc.",
      "Con không cần bố mẹ làm hộ, con cần bố mẹ tin con đang cố.",
      "Con hơi quá tải, mình nói chuyện sau một tiếng nhé.",
    ],
    neighbors: ["ISDA", "ESDV"],
  },
  {
    code: "ISDA",
    name: "Lữ Khách Màn Đêm",
    slogan: "Đêm nay bạn không cần giải quyết mọi thứ. Chỉ cần cho mình một chỗ nghỉ.",
    color: "#3A6360",
    tint: "#E9F1F0",
    summary:
      "Bạn là người thức khuya, quen với ánh sáng màn hình và những khoảng lặng khi cả nhà đã ngủ. Ban ngày, bạn có thể vẫn đi học, vẫn cười, nhưng bên trong bạn thường cảm thấy một khoảng trống khó gọi tên. Bạn tự trách vì mình thiếu động lực, trong khi thật ra bạn đã mệt từ lâu. Bạn giữ mọi thứ trong lòng, không muốn làm phiền ai, và dùng mạng để giữ mình khỏi đối diện với suy nghĩ. Bạn đang thiếu hy vọng, nhưng không phải là người không còn khả năng. Bạn có sự nhạy cảm, trí tưởng tượng và khả năng nhìn sâu vào mình. Bạn không cần phải sửa hết mọi thứ trong một đêm. Bạn chỉ cần một người thật để nói chuyện, một giấc ngủ bớt lệch, và một lý do nhỏ để mở mắt vào ngày mai. Nếu mọi thứ quá nặng, hãy để ai đó biết ngay hôm nay.",
    stressStyle:
      "Khi mọi thứ quá tải, bạn thức khuya hơn, lướt mạng trong im lặng, và để những lời tự trách nói thay mình.",
    strengths: [
      "Bạn nhạy cảm và có khả năng nhìn sâu vào cảm xúc của mình.",
      "Bạn có trí tưởng tượng và một thế giới nội tâm đáng khám phá.",
      "Bạn độc lập và biết cách tự mình đi qua nhiều đêm khó.",
    ],
    watchouts: [
      "Bạn dễ để giấc ngủ lệch dần mà không nhận ra.",
      "Bạn thu mình khi đang cần ai đó nhất.",
      "Bạn có thể dùng màn hình để tránh cảm giác trống.",
    ],
    firstAid: [
      {
        title: "Giảm ánh sáng màn hình",
        body: "Bật chế độ tối, giảm độ sáng, và đặt điện thoại xa giường 20 phút trước khi ngủ. Mắt dịu thì não dễ nghỉ.",
        minutes: 20,
      },
      {
        title: "Viết hai câu",
        body: "“Đêm nay mình đang…” và “Ngày mai mình chỉ cần…”. Chỉ hai câu. Không cần giải pháp lớn.",
        minutes: 5,
      },
      {
        title: "Uống nước và mở cửa sổ",
        body: "Cơ thể mất nước và thiếu khí mới có thể làm bạn nặng hơn. Một cốc nước, một khoảng không khí mới.",
        minutes: 5,
      },
      {
        title: "Nhắn một người, kể cả nửa đêm",
        body: "Bạn không cần đợi đến sáng. Gửi: “Mình đang khó ngủ và đang nghĩ nhiều.” Người thật sẽ trả lời khi họ dậy.",
        minutes: 10,
      },
      {
        title: "Gọi 111 nếu đêm nay quá nặng",
        body: "Tổng đài bảo vệ trẻ em hoạt động 24/7. Bạn có thể gọi chỉ để nghe một giọng nói và nói rằng mình cần giúp.",
        minutes: 10,
      },
    ],
    weeklyHabits: [
      "Ba tối trong tuần, ngủ trước 1 giờ.",
      "Mỗi sáng, ra ngoài 10 phút để chỉnh lại nhịp cơ thể.",
      "Mỗi ngày, nhắn một người thật.",
      "Mỗi ngày, làm một việc nhỏ bằng tay, không màn hình.",
    ],
    phrasesToShare: [
      "Con đang thức khuya vì không ngủ được, con không cố tình.",
      "Con cần bố mẹ giúp con đặt lại giờ ngủ.",
      "Con đang không ổn, con muốn có người nói chuyện.",
    ],
    neighbors: ["ISDV", "ISRA"],
  },
  {
    code: "ISRV",
    name: "Học Giả Căng Dây",
    slogan: "Bạn không cần căng dây 24/7 để chứng minh mình xứng đáng.",
    color: "#6A8F8A",
    tint: "#EFF5F4",
    summary:
      "Bạn là người chăm chỉ, kín đáo và có mục tiêu rõ ràng. Bạn thích đi sâu vào một chủ đề, làm việc một mình và đạt được những kết quả mà người khác ít thấy quá trình. Bạn tự đặt tiêu chuẩn cao, và dù không ai thúc, bạn vẫn cảm thấy mình phải tiến thêm một chút. Cơ thể bạn đang căng, nhưng bạn thường cho rằng chỉ cần cố thêm là sẽ ổn. Bạn ít nói về mệt mỏi vì không muốn bị xem là yếu, trong khi thật ra việc dám nói ra là một dạng sức mạnh khác. Bạn vẫn tin vào bản thân, vẫn có động lực, và đó là điểm tựa rất lớn. Bạn có kỷ luật, chiều sâu và sự kiên trì. Điều bạn cần bổ sung không phải là cố gắng hơn, mà là những khoảng nghỉ thật, một người để chia sẻ và cách nhìn giá trị của mình rộng hơn điểm số hay thành tích.",
    stressStyle:
      "Khi mọi thứ quá tải, bạn siết chặt kế hoạch hơn, học nhiều hơn, và coi việc nghỉ là một thất bại nhỏ.",
    strengths: [
      "Bạn có kỷ luật và khả năng đi sâu vào việc mình chọn.",
      "Bạn bền bỉ và đáng tin.",
      "Bạn có khả năng tự nhìn lại và phát triển.",
    ],
    watchouts: [
      "Bạn dễ gắn giá trị bản thân với kết quả.",
      "Bạn khó cho mình nghỉ mà không thấy có lỗi.",
      "Bạn giữ mệt mỏi trong lòng để không bị xem là yếu.",
    ],
    firstAid: [
      {
        title: "Đi bộ 10 phút",
        body: "Không mục tiêu, không bài giảng. Chỉ đi. Cơ thể chuyển động giúp đầu óc thoát khỏi vòng lặp.",
        minutes: 10,
      },
      {
        title: "Chọn một hoạt động hồi sức",
        body: "Nghe nhạc, tưới cây, nấu một món đơn giản. Không cần hữu ích. Chỉ cần làm bạn dễ chịu.",
        minutes: 15,
      },
      {
        title: "Giãn cơ 5 phút",
        body: "Vai, cổ, lưng dưới. Giữ mỗi động tác 20 giây. Bạn đã ngồi rất lâu và cơ thể đang gánh phần đó.",
        minutes: 5,
      },
      {
        title: "Nói với một người",
        body: "Một câu thật: “Mình đang căng quá.” Không cần kể chi tiết. Được nghe mà không bị khuyên bảo cũng đủ.",
        minutes: 10,
      },
      {
        title: "Đặt giờ dừng",
        body: "Chọn một giờ trong tối nay và dừng việc đúng giờ đó, kể cả khi chưa xong. Ngày mai bạn sẽ làm tốt hơn.",
        minutes: 5,
      },
    ],
    weeklyHabits: [
      "Mỗi ngày, có một khối nghỉ không màn hình.",
      "Mỗi tuần, dành một ngày không học bài mới.",
      "Mỗi ngày, vận động nhẹ 10 phút.",
      "Ngủ đủ 7 tiếng ít nhất bốn đêm mỗi tuần.",
    ],
    phrasesToShare: [
      "Con đang học nhiều, nhưng con cần bố mẹ nhắc con nghỉ.",
      "Con không cần bị so sánh, con đang cố hết sức.",
      "Con muốn giỏi, nhưng con cũng muốn khỏe.",
    ],
    neighbors: ["ISRA", "IFRV"],
  },
  {
    code: "ISRA",
    name: "Chiến Binh Kiệt Sức",
    slogan: "Bạn đã làm rất nhiều. Bây giờ, việc quan trọng nhất là chăm sóc người đã làm những điều đó.",
    color: "#2C4A47",
    tint: "#E7EFED",
    summary:
      "Bạn là người đã đặt rất nhiều vào việc trở nên tốt hơn. Bạn có mục tiêu, có kỷ luật và thường là người tự đẩy mình đi xa hơn mức người khác yêu cầu. Nhưng dạo này cơ thể bạn không còn giữ được nhịp đó. Bạn mệt, khó ngủ, khó tập trung, và có những lúc mọi thứ trở nên nặng hơn bình thường. Bạn có thể đang tự trách vì mình không còn giống phiên bản lý tưởng, trong khi điều bạn cần không phải là thêm kỷ luật mà là được nghỉ. Bạn đã chứng minh mình rất nhiều lần; giờ bạn không cần chứng minh thêm. Bạn có sự bền bỉ, sự tận tâm và khả năng tự nhìn lại. Lúc này, hãy để một người lớn đáng tin biết bạn đang kiệt sức. Nếu cần, gọi 111. Việc tìm người đồng hành không làm bạn mất đi những gì đã xây; nó giúp bạn có sức để tiếp tục, theo một cách bền hơn.",
    stressStyle:
      "Khi mọi thứ quá tải, bạn cố thêm, thức thêm, và chỉ dừng khi cơ thể không cho đi tiếp; lúc đó bạn thấy mình thất bại dù đã làm quá nhiều.",
    strengths: [
      "Bạn có sự bền bỉ và tinh thần trách nhiệm cao.",
      "Bạn tận tâm với những gì mình đã chọn.",
      "Bạn có khả năng tự nhìn lại và hiểu mình đang ở đâu.",
    ],
    watchouts: [
      "Bạn có thể bỏ qua tín hiệu kiệt sức của cơ thể.",
      "Bạn dễ coi việc nghỉ là thất bại.",
      "Bạn thu mình đúng lúc cần được giúp nhất.",
    ],
    firstAid: [
      {
        title: "Dừng lại",
        body: "Đặt mọi thứ xuống trong 10 phút. Ngồi hoặc nằm yên. Không màn hình, không nhiệm vụ. Bạn đang nghỉ, không phải bỏ cuộc.",
        minutes: 10,
      },
      {
        title: "Nói với một người lớn",
        body: "Một câu đủ rồi: “Con đang kiệt sức và con cần giúp.” Bố mẹ, thầy cô, người thân hoặc người bạn tin.",
        minutes: 15,
      },
      {
        title: "Chăm cơ thể trước",
        body: "Uống nước, ăn một chút, rửa mặt. Cơ thể kiệt không thể suy nghĩ rõ. Những việc nhỏ này là bước đầu.",
        minutes: 10,
      },
      {
        title: "Cho phép mình ngủ",
        body: "Nếu có thể, ngủ một giấc ngắn. Đặt báo thức nếu bạn sợ ngủ quên. Giấc ngủ là một phần của hồi phục.",
        minutes: 20,
      },
      {
        title: "Gọi 111 nếu bạn cần giúp ngay",
        body: "Bạn không cần chờ đến lúc không còn sức. Tổng đài hoạt động 24/7 và bạn có thể gọi bất cứ lúc nào.",
        minutes: 10,
      },
    ],
    weeklyHabits: [
      "Mỗi tối, tắt màn hình 1 giờ trước khi ngủ.",
      "Mỗi ngày, chọn một việc để bỏ hoặc dời.",
      "Mỗi tuần, nhờ một người giúp một việc cụ thể.",
      "Mỗi ngày, ra ngoài 10 phút để cơ thể có ánh sáng.",
    ],
    phrasesToShare: [
      "Con đã cố rất nhiều, con cần bố mẹ giúp con nghỉ.",
      "Con không lười, cơ thể con đang kiệt.",
      "Con cần nói với người lớn, bố mẹ đi cùng con được không?",
    ],
    neighbors: ["ISRV", "ESRA"],
  },
];

export const ARCHETYPE_BY_CODE: Record<ArchetypeCode, Archetype> = Object.fromEntries(
  ARCHETYPES.map((a) => [a.code, a]),
) as Record<ArchetypeCode, Archetype>;

export function isArchetypeCode(value: string): value is ArchetypeCode {
  return value in ARCHETYPE_BY_CODE;
}

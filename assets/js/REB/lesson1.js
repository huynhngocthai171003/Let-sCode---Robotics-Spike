const data = [
  {
    title: "🎓 Kiến thức",
    items: [
      "✔️ Học sinh ôn tập các khối lệnh: Sound, Light, Motor, Movement và Control Blocks.",
      "✔️ Hiểu được trình tự hành vi phản xạ của robot: gầm – sủa – di chuyển – phát sáng.",
      "✔️ Ghi nhớ logic lập trình theo chuỗi và đồng thời."
    ]
  },
  {
    title: "🛠️ Kỹ năng",
    items: [
      "✔️ Lắp ráp được mô hình robot “Chó giữ nhà” hoàn chỉnh.",
      "✔️ Lập trình robot thực hiện hành vi mô phỏng: cảnh báo – chuyển động – đổi màu đèn.",
      "✔️ Kết hợp nhiều khối lệnh trong một chương trình phức hợp."
    ]
  },
  {
    title: "💡 Tư duy",
    items: [
      "✔️ Vận dụng tư duy logic để xây dựng chuỗi hành vi có điều kiện và phản xạ.",
      "✔️ Phân tích vấn đề khi robot không hoạt động như mong muốn và điều chỉnh kịp thời.",
      "✔️ Áp dụng kỹ năng tổ chức, thử nghiệm và tối ưu chương trình."
    ]
  },
  {
    title: "❤️ Thái độ",
    items: [
      "✔️ Tự tin ôn tập và vận dụng kiến thức từ khóa REA để hoàn thành sản phẩm sáng tạo.",
      "✔️ Chủ động hợp tác trong nhóm, hỗ trợ bạn bè cùng hoàn thành mô hình.",
      "✔️ Hào hứng chia sẻ kết quả và sẵn sàng bước vào thử thách mới ở khóa REB."
    ]
  }
];

// ====== Sinh HTML ======
const container = document.getElementById("accordion");

data.forEach((section, index) => {
  const id = "acc-tab-" + (index + 1);

  const input = `<input type="radio" id="${id}" name="accordion" ${index === 0 ? "checked" : ""}>`;

  const label = `
    <label for="${id}" class="accordion-label">
      <h2>${section.title}</h2>
    </label>
  `;

  const listItems = section.items.map(item => `<li>${item}</li>`).join("");

  const content = `
    <div class="accordion-content">
      <ul>${listItems}</ul>
    </div>
  `;

  container.innerHTML += input + label + content;
});

// -------------------------------------------------------------------------------------------------------
const steps = [
  { title: "Giới thiệu mô hình",   color: "#41516C" },
  { title: "Chuẩn bị vật liệu",    color: "#FBCA3E" },
  { title: "Xây dựng mô hình",     color: "#E24A68" },
  { title: "Ôn tập tổng hợp",      color: "#1B5F8C" },
  { title: "Hoạt động thử thách",  color: "#4CADAD" },
  { title: "Tổng kết bài học",     color: "#868bfc" }
];

const list = document.getElementById("timeline-list");
if (list) {
  list.innerHTML = ""; 

  steps.forEach(step => {
    const item = `
      <li class="custom-timeline__item" style="--accent-color:${step.color}">
        <div class="custom-timeline__date">${step.title}</div>
      </li>
    `;
    list.innerHTML += item;
  });
}

// --------------------------------------------------------------------
const modelData = {
  video: {
    src: "../../../REB/Buổi 1/chó.mp4",
    controls: true,
    style: "width:100%"
  },
  image: {
    src: "../../../REB/Buổi 1/lesson1.avif",
    alt: "Mô hình bài học",
    style: "border-radius:23px; background-color:white; margin-top:16px;"
  }
};

// ====== RENDER RA HTML ======
const intro = document.getElementById("intro-model");
if (intro) {
  let html = "";

  if (modelData.video) {
    html += `<video ${modelData.video.controls ? "controls" : ""} 
                   src="${modelData.video.src}" 
                   style="${modelData.video.style}"></video>`;
  }

  if (modelData.image) {
    html += `<img src="${modelData.image.src}" 
                  alt="${modelData.image.alt || ""}" 
                  style="${modelData.image.style}">`;
  }

  intro.innerHTML = html;
}


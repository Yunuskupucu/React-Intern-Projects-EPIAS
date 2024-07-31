import aboutImg from "../images/about.jpg";
import workImg from "../images/work3.jpg";
import "../style/About.css";

const About = () => {
  return (
    <div className="about-div">
      <title>
        <p>
          <span className="underline">~ ABOUT US ~</span>
        </p>
      </title>
      <div className="box-full">
        <div className="box">
          <img className="img-one" src={aboutImg} alt="" />
          <p className="desc">
            {/* Hoş geldiniz! Projemiz, günlük yaşamınızı daha verimli, planlı ve
            disiplinli hale getirmeyi amaçlayan bir yapılacaklar listesi
            uygulamasıdır. Kullanıcıların günlük, haftalık, aylık ve yıllık
            hedeflerini belirlemelerine ve bu hedeflere ulaşmak için gerekli
            adımları planlamalarına yardımcı olmayı hedefliyoruz. Görevlerinizi
            kaydetmenize, düzenlemenize, güncellemenize ve silmenize olanak
            tanıyan bu uygulama, sade ve kullanıcı dostu arayüzü ile hayatınızı
            daha organize ve verimli bir şekilde yönetmenize yardımcı olacak. */}
            Welcome! Our project is a to-do list application designed to make
            your daily life more efficient, organized, and disciplined. We aim
            to help users set daily, weekly, monthly, and yearly goals and plan
            the necessary steps to achieve these goals. By allowing you to save,
            organize, update, and delete your tasks, this application with its
            simple and user-friendly interface will help you manage your life
            more efficiently and productively.
          </p>
        </div>
        <div className="box">
          <p className="desc">
            {/* Bu proje, verimliliğinizi artırmak, planlama ve organizasyon
            becerilerinizi geliştirmek için tasarlandı. Görevlerinizi önem
            derecesine göre kategorize edebilir, tarih ve saat belirleyebilir ve
            notlar ekleyebilirsiniz. Planlı ve disiplinli bir çalışma
            alışkanlığı kazanmanızı sağlarken, tamamlanan görevleri görerek
            motivasyonunuzu artırabilirsiniz. Yapılacaklar listesi uygulamamız,
            sadece günlük görevlerinizi yönetmekle kalmaz, aynı zamanda uzun
            vadeli hedeflerinize ulaşmak için de bir yol haritası sunar. Bizimle
            birlikte bu yolculuğa katıldığınız için teşekkür ederiz; birlikte
            daha verimli ve başarılı bir geleceğe adım atalım. */}
            This project is designed to enhance your productivity and develop
            your planning and organizational skills. Categorize your tasks by
            priority, set deadlines, and add notes. While helping you develop a
            planned and disciplined work habit, you can increase your motivation
            by seeing completed tasks. Our to-do list application not only
            manages your daily tasks but also provides a roadmap to achieve your
            long-term goals. Thank you for joining us on this journey; let's
            take steps towards a more productive and successful future together.
          </p>
          <img className="img-two" src={workImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;

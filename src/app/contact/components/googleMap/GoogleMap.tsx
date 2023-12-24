
interface IGoogleMap {
  url?: string;
  width?: number | string;
  height?: number | string;
}
/**
 * 
 * @param url Set url google map via share url. Default is Ha Noi
 * @param width Set width. Default is 600px
 * @param height Set height. Default is 450px
 * @returns Google map
 */
export default function GoogleMap({url, width, height}: IGoogleMap) {
  const defaultMarked = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29795.55535149252!2d105.83854215495802!3d21.014896515776584!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9bd9861ca1%3A0xe7887f7b72ca17a9!2zSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2sus!4v1703091335291!5m2!1svi!2sus";
  const identifyUnit = (unit: string | number): string => {
    if(typeof unit == "number") {
      return `${unit}px`;
    }
    return unit;
  }
  return (
    <iframe
      src={url ? url : defaultMarked}
      width={600}
      height={450}
      style={{
        border: 0,
        width: width ? identifyUnit(width) : '600px',
        height: height ? identifyUnit(height) : '450px',
      }}
      allowFullScreen={false}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  )
}

/** @format */

'use client';
/** @format */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import styles from './about.module.css';
import { colors } from '../../utils/Theme';
import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ContactForm } from '@/components/contactForm/ContactForm';

const Aboutpage = () => {
  const [isMobile, setIsMobile] = useState(false);

  const [b1h, setB1h] = useState(false);
  const [b2h, setB2h] = useState(false);
  const [b12, setB12] = useState(false);
  const [b3h, setB3h] = useState(false);
  const [b4h, setB4h] = useState(false);
  const [b5h, setB5h] = useState(false);
  // Animation Controls //
  const control = useAnimation();
  const control1 = useAnimation();
  const control2 = useAnimation();
  const control3 = useAnimation();
  const control4 = useAnimation();
  const control5 = useAnimation();

  // Animation InViews //

  const [ref, InView] = useInView();
  const [ref1, InView1] = useInView();
  const [ref2, InView2] = useInView();
  const [ref3, InView3] = useInView();
  const [ref4, InView4] = useInView();
  const [ref5, InView5] = useInView();

  if (InView) {
    control.start({ opacity: 1, x: 0 });
  }
  if (InView1) {
    control1.start({ opacity: 1, y: 0, x: 0 });
  }
  if (InView2) {
    control2.start({ opacity: 1, x: 0 });
  }
  if (InView3) {
    control3.start({ opacity: 1, x: 0, y: 0 });
  }
  if (InView4) {
    control4.start({ opacity: 1, x: 0 });
  }
  if (InView5) {
    control5.start({ opacity: 1, y: 0, x: 0 });
  }
  useEffect(() => {
    const handleSize = () => {
      if (typeof window !== 'undefined' && window.innerWidth < 870) {
        setIsMobile(true);
        console.log('True', isMobile);
      } else {
        setIsMobile(false);
        console.log('False', isMobile);
      }
    };

    if (typeof window !== 'undefined') {
      handleSize();
      window.addEventListener('resize', handleSize);

      return () => {
        window.removeEventListener('resize', handleSize);
      };
    }
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '99vw',
        alignItems: 'center',
      }}>
      {!isMobile && (
        <div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            alt='abt'
            height={896}
            width={1920}
            style={{
              width: '99vw',
              height: '600px',
              objectFit: 'cover',
            }}
            src={'/AboutHeader.png'}
          />
          <div
            style={{
              width: '99vw',
              height: '600px',
              objectFit: 'cover',
              backgroundColor: '#000',
              position: 'absolute',
              mixBlendMode: 'soft-light',
            }}></div>

          <motion.div
            ref={ref}
            animate={control}
            initial={{ x: -50, opacity: 0 }}
            transition={{ duration: 1 }}
            className={`${styles.header} ${styles.alignCenter}`}>
            <span className={styles.head1}>
              Passionate{' '}
              <span className={styles.normal}>
                {' '}
                About <br /> Providing
              </span>
              <span style={{ color: colors.primary, fontWeight: 900 }}>
                {' '}
                Extreme Value
              </span>{' '}
              <br />
            </span>
            <span className={styles.line1}>
              Ace8 is people focused organization that is dedicated to
              underpromising and overdeliverying. We have a strong{' '}
              {!isMobile && <br />} belief system and set of{' '}
              <span style={{ color: colors.primary }}>values </span> that we
              lead with in all of our client interactions.
            </span>
          </motion.div>
        </div>
      )}
      {isMobile && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <div style={{}}>
            <Image
              alt='abt'
              height={896}
              width={1920}
              style={{ width: '99vw', height: '70vw' }}
              src={'/mblAbout.png'}
            />
          </div>

          <motion.div
            ref={ref}
            animate={control}
            initial={{ x: -50, opacity: 0 }}
            transition={{ duration: 1 }}
            style={{ position: 'absolute', textAlign: 'center' }}
            // className={`${styles.header} ${styles.alignCenter}`}
          >
            <div>
              <span className={styles.head1}>
                Passionate{' '}
                <span className={styles.normal}>
                  {' '}
                  <br /> About Providing
                </span>
                <br />
                <span style={{ color: colors.primary, fontWeight: 900 }}>
                  {' '}
                  Extreme Value
                </span>{' '}
                <br />
              </span>
            </div>
            <div className={styles.line1}>
              Ace8 is people focused organization that is dedicated <br /> to
              underpromising and overdeliverying.
            </div>
          </motion.div>
        </div>
      )}

      <motion.div
        ref={ref5}
        animate={control5}
        initial={{ x: 50, opacity: 0 }}
        transition={{ duration: 1 }}>
        <div className={styles.contentContainer}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2vw',
              alignItems: 'center',
            }}>
            <div className={styles.devContentContainer}>
              <div
                className={styles.h3}
                style={{ width: isMobile ? 'auto' : '50rem' }}>
                Trusted By {isMobile && <br />}
                <span style={{ color: colors.primary }}>
                  Brands Internationally
                </span>
              </div>
            </div>

            {isMobile ? (
              <div className='kkkk'>
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  loop={true}
                  autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                    bulletActiveClass: styles.pik,
                  }}
                  navigation={false}
                  modules={[Autoplay, Pagination, Navigation]}
                  className='mySwiper'
                  style={{
                    height: '20vh',
                    width: '100vw',
                  }}>
                  <SwiperSlide
                    style={{
                      justifyContent: 'space-evenly',
                      alignItems: 'center',
                      display: 'flex',
                    }}>
                    <Image
                      alt='bg'
                      height={896}
                      width={1920}
                      src={'/brand2k.png'}
                      style={{ width: '40vw', height: 'auto' }}
                    />
                    <Image
                      alt='bg'
                      height={896}
                      width={1920}
                      src={'/brand1h.png'}
                      style={{ width: '20vw', height: 'auto' }}
                    />
                  </SwiperSlide>
                  <SwiperSlide
                    style={{
                      justifyContent: 'space-evenly',
                      alignItems: 'center',
                      display: 'flex',
                    }}>
                    <Image
                      alt='bg'
                      height={896}
                      width={1920}
                      src={'/brand3h.png'}
                      style={{ width: '40vw', height: 'auto' }}
                    />
                    <Image
                      alt='bg'
                      height={896}
                      width={1920}
                      src={'/brand4h.png'}
                      style={{ width: '40vw', height: 'auto' }}
                    />
                  </SwiperSlide>
                  <SwiperSlide
                    style={{
                      justifyContent: 'space-evenly',
                      alignItems: 'center',
                      display: 'flex',
                    }}>
                    <Image
                      alt='bg'
                      height={896}
                      width={1920}
                      src={'/brand5h.png'}
                      style={{ width: '30vw', height: 'auto' }}
                    />
                    <Image
                      alt='bg'
                      height={896}
                      width={1920}
                      src={'/mmms.png'}
                      style={{ width: '30vw', height: 'auto' }}
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            ) : (
              <div
                style={{
                  display: 'flex',
                  // paddingBottom: "1rem",
                  gap: '4rem',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                }}>
                <div
                  onMouseEnter={() => setB1h(true)}
                  onMouseLeave={() => setB1h(false)}
                  style={{
                    position: 'relative',
                    width: '4rem',
                    height: 'auto',
                  }}>
                  <Image
                    alt='bg'
                    height={896}
                    width={1920}
                    src={b1h ? '/brand1h.png' : '/brand1.png'}
                  />
                </div>
                <div
                  onMouseEnter={() => {
                    setB2h(true);
                    console.log('sss');
                  }}
                  onMouseLeave={() => setB2h(false)}
                  style={{
                    position: 'relative',
                    width: '14rem',
                    height: 'auto',
                  }}>
                  <Image
                    alt='bg'
                    height={896}
                    width={1920}
                    src={b2h ? '/brand2k.png' : '/brand2.png'}
                  />
                </div>
                <div
                  onMouseEnter={() => {
                    setB12(true);
                    console.log('sss');
                  }}
                  onMouseLeave={() => setB12(false)}
                  style={{
                    position: 'relative',
                    width: '14rem',
                    height: 'auto',
                  }}>
                  <Image
                    alt='bg'
                    height={896}
                    width={1920}
                    src={b12 ? '/mmms.png' : '/Microsoft-01.png'}
                  />
                </div>
                <div
                  onMouseEnter={() => {
                    setB3h(true);
                    console.log('sss');
                  }}
                  onMouseLeave={() => setB3h(false)}
                  style={{
                    position: 'relative',
                    width: '12rem',
                    height: 'auto',
                  }}>
                  <Image
                    alt='bg'
                    height={896}
                    width={1920}
                    src={b3h ? '/brand3h.png' : '/brand3.png'}
                  />
                </div>

                <div
                  onMouseEnter={() => {
                    setB4h(true);
                    console.log('sss');
                  }}
                  onMouseLeave={() => setB4h(false)}
                  style={{
                    position: 'relative',
                    width: '12rem',
                    height: 'auto',
                  }}>
                  <Image
                    alt='bg'
                    height={896}
                    width={1920}
                    src={b4h ? '/brand4h.png' : '/brand4.png'}
                  />
                </div>

                <div
                  onMouseEnter={() => {
                    setB5h(true);
                    console.log('sss');
                  }}
                  onMouseLeave={() => setB5h(false)}
                  style={{
                    position: 'relative',
                    width: '11rem',
                    height: 'auto',
                  }}>
                  <Image
                    alt='bg'
                    height={896}
                    width={1920}
                    src={b5h ? '/brand5h.png' : '/brand5.png'}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
      {/* ------ */}

      <div
        style={{
          backgroundColor: '#fff',
          flexDirection: 'column',
          width: '99vw',
          alignItems: 'center',
          display: 'flex',
        }}>
        <motion.div
          ref={ref1}
          animate={control1}
          initial={{ y: -50, x: -50, opacity: 0 }}
          transition={{ duration: 1 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#fff',
            width: isMobile ? '99vw' : 'clamp(20rem,70vw,70rem)',
            alignItems: 'center',
          }}>
          <div className={styles.storyText}>
            Our <span style={{ color: '#000' }}>Story</span>{' '}
          </div>

          <div className={styles.storyText1}>
            Ace8 is a globally recognized full-stack specialist at the forefront
            of DevSecOps, Cloud, Data, and Message Queueing solutions.
            {isMobile && <br />} Our core competencies lie in{'\n'}delivering
            cutting-edge technologies and services in{' '}
            {isMobile ? (
              <span>
                Api managment, Integration technology, and Identity Management.
                With a firm commitment to both cloud-based and on-premise iPaaS
                solutions, Ace8 has established itself as the leading
                multi-vendor Integration Partner since its inception in 2007
              </span>
            ) : (
              <span>
                8 specific domains ranging from Advanced Architectures to
                Microservices, Code & Development. With a firm commitment to
                both cloud-based and on-premise solutions, Ace8 has established
                itself as the leading multi- vendor partner since its inception
                in 2016.
              </span>
            )}
          </div>

          {!isMobile && (
            <div className={styles.storyText1}>
              Our best-of-breed approach sets us apart, empowering organizations
              worldwide to select tailor-made services and strategies that align
              with their unique requirements,{'\n'}regardless of their size or
              industry. Over the years, Ace8 has successfully migrated and
              guided over 50+ organizations on their digital transformation
              journey.
            </div>
          )}

          <div
            className={styles.flexRow}
            style={{
              gap: '2rem',
              marginTop: '2rem',
              width: isMobile ? '99vw' : 'clamp(20rem,70vw,70rem)',
            }}>
            <div
              className={styles.blockChianContainer}
              style={{
                flexDirection: 'column',
                display: 'flex',
                alignItems: 'center',
              }}>
              <div
                style={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                <Image
                  alt='blockChain'
                  height={487}
                  width={700}
                  style={{ width: '40rem', height: 'auto' }}
                  src={'/image(17).png'}
                />

                <Image
                  alt='blockChain'
                  height={351}
                  width={231}
                  style={{
                    height: 'auto',
                    position: 'absolute',
                    bottom: '-6rem',
                    left: '-2rem',
                    // width: "15vw",
                    width: isMobile ? '45vw' : 'clamp(14rem,21vw,21rem)',
                  }}
                  src={'/BlockChainCode.png'}
                />
              </div>
            </div>
            {!isMobile && (
              <div
                className={`${styles.storyText2} 
               
               ${styles.mt10}`}
                style={{
                  width: isMobile ? '80vw' : 'clamp(15rem,30vw,30rem)',
                }}>
                Ace8&apos;s comprehensive solutions offer unparalleled
                flexibility to organizations,{'\n'}transforming them into
                digital agencies capable of enhancing customer relationships and
                introducing innovative services, products, and business models.
                We firmly believe that embracing an API- first and Cloud-first
                strategy is the key to unlocking this flexibility in technology,
                knowledge, and financial success.
                <div
                  style={{
                    marginTop: '2vw',
                    width: isMobile ? '80vw' : 'clamp(15rem,30vw,30rem)',
                  }}>
                  To enable organizations to embrace this vision, Ace8 provides
                  a wide range of services, including Advanced Architectures,
                  Messaging and Queuing, DevSecOps, Cloud-Native, Extreme
                  Automation, Data Management and Solutions, Support and
                  Incident Management and Micorservices, Code, and Development.
                  With a dedicated team of over 50+ experts specializing in our
                  8 domains, Ace8 stands tall as one of the most esteemed
                  Digital Transformation specialists worldwide.
                </div>
              </div>
            )}
          </div>
        </motion.div>

        <div
          style={{
            width: '70vw',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#fff',
          }}>
          <div
            className={styles.Aceheading}
            style={{ color: '#000' }}>
            The Ace8 <span style={{ color: '#eb9fff' }}>domains</span>
          </div>
          {!isMobile && (
            <div className={styles.storyText1}>
              At Ace8, we empower businesses to thrive in the digital age
              through cutting-edge technology services spanning eight crucial
              domains. From Advanced Architectures to Microservices, Code &
              Development, we&apos;re dedicated to delivering unparalleled
              expertise and innovative solutions tailored to meet your specific
              needs.
            </div>
          )}

          {isMobile ? (
            <Image
              alt='GroupServices'
              width={1682}
              height={536}
              style={{
                width: '80vw',
                height: 'auto',
                marginTop: '3rem',
              }}
              src={'/image23.png'}
            />
          ) : (
            <Image
              alt='GroupServices'
              width={1682}
              height={536}
              style={{
                width: 'clamp(60rem,70vw,70rem)',
                height: 'auto',
                marginTop: '3rem',
              }}
              src={'/GroupServices.png'}
            />
          )}
        </div>

        <motion.div
          ref={ref3}
          animate={control3}
          initial={{ x: -50, y: -50, opacity: 0 }}
          transition={{ duration: 1 }}
          className={styles.mb10}
          style={{
            width: '99vw',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            backgroundColor: '#fff',
          }}>
          <div
            className={styles.Aceheading}
            style={{ color: '#000', marginTop: '5rem' }}>
            Our
            <span style={{ color: isMobile ? '#8ACDC5' : '#eb9fff' }}>
              {' '}
              Industries
            </span>
          </div>
          {!isMobile && (
            <div className={styles.storyText1}>
              Ace8 is a globally recognized full-stack specialist at the
              forefront of DevOps, Cloud, Data, and Messaging and Queueing
              solutions. Our core competencies lie in delivering cutting-edge
              technologies and services for API management, Integration
              technology, and Identity Management. With a firm commitment to
              both cloud- based and on-premise iPaaS solutions, Ace8 has
              established itself as the leading multi-vendor Integration Partner
              since its inception in 2007.
            </div>
          )}

          {isMobile ? (
            <>
              <div>
                <Image
                  alt='abt'
                  height={896}
                  width={1920}
                  style={{
                    width: '80vw',
                    height: 'auto',
                    marginTop: '2vw',
                    marginBottom: '4vw',
                  }}
                  src={'/sd.png'}
                />
              </div>
            </>
          ) : (
            <div>
              <Image
                alt='abt'
                height={896}
                width={1920}
                style={{
                  width: 'clamp(50rem,80vw,80rem)',
                  height: 'auto',
                  marginTop: '2rem',
                  marginBottom: '3rem',
                }}
                src={'/industries.png'}
              />
            </div>
          )}

          {/* NNN */}
        </motion.div>
      </div>
      <div
        style={{
          width: '99vw',
          backgroundColor: '#0D1117',
          display: 'flex',
          justifyContent: 'center',
        }}>
        <motion.div
          ref={ref4}
          initial={{ x: -50, opacity: 0 }}
          animate={control4}
          transition={{ duration: 1 }}
          className={styles.gap10}
          style={{
            display: 'flex',
            backgroundColor: '#0D1117',
            // backgroundColor: "red",
            flexDirection: 'column',
            height: 'auto',
            alignItems: 'center',
            width: 'clamp(20rem,95vw,110rem)',
            justifyContent: 'center',
          }}>
          <div
            className={`${styles.heading2} `}
            style={{
              textAlign: 'center',
              marginTop: '3rem',
              fontWeight: 'lighter',
              width: isMobile ? '79vw' : '',
            }}>
            With over 100 years of experience,
            <span style={{ color: '#fff', fontWeight: 'bold' }}> and </span>
            <span style={{ color: '#8ACDC5', fontWeight: 'bold' }}>
              the
              {!isMobile && <br />} desire to always stay on the cutting edge,
            </span>
            <span style={{ color: '#fff', fontWeight: 'lighter' }}> we</span>
            {!isMobile && <br />}
            are empowered{' '}
            <span style={{ color: '#fff', fontWeight: 'bold' }}>
              to transform your business.
            </span>
          </div>

          <div
            className={`${styles.heading2}  `}
            style={{ fontWeight: 'bold', marginTop: '2rem' }}>
            <span style={{ color: '#8ACDC5' }}>Our</span> Beliefs
          </div>

          {isMobile ? (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                alignItems: 'center',
                gap: '19vw',
              }}>
              <div>
                <Image
                  alt='abt'
                  height={896}
                  width={1920}
                  style={{ width: '95vw', height: 'auto' }}
                  src={'/belifs.png'}
                />
              </div>
            </div>
          ) : (
            <div
              style={{
                alignItems: 'center',
                flexDirection: 'column',
                display: 'flex',
              }}>
              <Image
                alt='abt'
                height={896}
                width={1920}
                style={{
                  width: 'clamp(20rem,80vw,80rem)',
                  height: 'auto',
                  // marginTop: "5rem",
                }}
                src={'/tree3.png'}
              />
              {/* <Image
                alt="abt"
                height={896}
                width={1920}
                style={{ width: "clamp(20rem,90vw,100rem)", height: "auto" }}
                src={"/tree3.png"}
              />
              <Image
                alt="abt"
                height={896}
                width={1920}
                style={{
                  width: "clamp(20rem,65vw,70rem)",
                  height: "auto",
                  marginTop: isMobile ? "" : "4rem",
                  // marginLeft: "2rem",
                }}
                src={"/devtree4.png"}
              /> */}
            </div>
          )}
          {isMobile ? (
            <div
              style={{
                alignItems: 'center',
                flexDirection: 'column',
                display: 'flex',
              }}>
              <div
                className={`${styles.heading2}  `}
                style={{
                  fontWeight: 'bold',
                  marginTop: '2rem',
                }}>
                Why
                <span style={{ color: '#C496FF' }}> We Do This</span>
              </div>

              <Image
                alt='abt'
                height={896}
                width={1920}
                style={{
                  width: 'clamp(20rem,80vw,80rem)',
                  height: 'auto',
                  // marginTop: "5rem",
                }}
                src={'/23.png'}
              />
              <div
                className={`${styles.heading2}  `}
                style={{ fontWeight: 'bold', marginTop: '2rem' }}>
                Our
                <span style={{ color: '#C496FF' }}> Values</span>
              </div>
              <Image
                alt='abt'
                height={896}
                width={1920}
                style={{
                  width: 'clamp(20rem,80vw,80rem)',
                  height: 'auto',
                  // marginTop: "5rem",
                }}
                src={'/ksd.png'}
              />
            </div>
          ) : (
            ''
          )}

          {isMobile ? (
            <></>
          ) : (
            <div>
              <Image
                alt='value'
                height={896}
                width={1920}
                style={{
                  width: 'clamp(50rem,80vw,80rem)',
                  height: 'auto',
                  marginTop: '2.5rem',
                }}
                src={'/values1.png'}
              />
            </div>
          )}

          <div style={{ display: 'flex', gap: '2rem' }}>
            <motion.div
              key={'id18'}
              whileHover={{ scale: isMobile ? 1 : 1.1 }}
              whileTap={{ scale: isMobile ? 1 : 0.9 }}
              style={{
                justifyContent: 'space-around',
                alignItems: 'center',
                width: 'clamp(20rem,70vw,70rem)',
                flexDirection: isMobile ? 'column' : 'row',
                flexWrap: 'wrap',
              }}
              className={styles.devSection}>
              <div className={styles.devContentContainer}>
                <div
                  className={styles.h3}
                  style={{ fontSize: isMobile ? '' : '2rem', width: 'auto' }}>
                  Strategically Aligned{!isMobile && <br />} With{' '}
                  <span style={{ color: colors.primary }}>
                    {' '}
                    Industry Leaders
                  </span>
                </div>
              </div>
              {isMobile && (
                <Swiper
                  loop={true}
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                    bulletActiveClass: styles.pik,
                  }}
                  navigation={false}
                  modules={[Autoplay, Pagination, Navigation]}
                  className='mySwiper'
                  style={{
                    height: '20vh',
                    width: '40vw',
                  }}>
                  <SwiperSlide
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      display: 'flex',
                    }}>
                    <Image
                      style={{ width: '25vw', height: 'auto' }}
                      alt='bg'
                      height={896}
                      width={1920}
                      // className={styles.indImage}
                      src={'/aws.png'}
                    />
                  </SwiperSlide>
                  <SwiperSlide
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      display: 'flex',
                    }}>
                    <Image
                      alt='bg'
                      height={896}
                      width={1920}
                      style={{ width: '60vw', height: 'auto' }}
                      src={'/vmware.png'}
                    />
                  </SwiperSlide>
                  <SwiperSlide
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      display: 'flex',
                    }}>
                    <Image
                      alt='bg'
                      height={896}
                      width={1920}
                      style={{ width: '60vw', height: 'auto' }}
                      src={'/rabbitmq.png'}
                    />
                  </SwiperSlide>
                  <SwiperSlide
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      display: 'flex',
                    }}>
                    <Image
                      alt='bg'
                      height={95}
                      width={348}
                      style={{ width: '60vw', height: 'auto' }}
                      src={'/broadcom.png'}
                    />
                  </SwiperSlide>
                </Swiper>
              )}
              {!isMobile && (
                <>
                  <div>
                    <Image
                      style={{
                        width: isMobile ? '15vw' : '3.8rem',
                        height: 'auto',
                        marginTop: isMobile ? '2vw' : '0vw',
                      }}
                      alt='bg'
                      height={896}
                      width={1920}
                      // className={styles.indImage}
                      src={'/aws.png'}
                    />
                  </div>
                  <div>
                    <Image
                      alt='bg'
                      height={896}
                      width={1920}
                      className={styles.indImage}
                      src={'/vmware.png'}
                    />
                  </div>
                  <div>
                    <Image
                      alt='bg'
                      height={896}
                      width={1920}
                      className={styles.indImage}
                      src={'/rabbitmq.png'}
                    />
                  </div>
                  <div>
                    <Image
                      alt='bg'
                      height={95}
                      width={348}
                      className={styles.indImage}
                      src={'/broadcom.png'}
                    />
                  </div>
                </>
              )}
            </motion.div>
          </div>

          {!isMobile && <ContactForm />}
          {/* <div>
          <Image
          alt="value"
          height={896}
          width={1920}
          style={{ width: "100vw", height: "auto", marginTop: "6.5vw" }}
          src={"/strategy.png"}
          />
        </div> */}
        </motion.div>
      </div>
    </div>
  );
};

//
export default Aboutpage;

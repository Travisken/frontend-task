"use client"
import taskStyle from "../styles/task.module.css";
import imageIcon from "../../public/images_icons/image.png"
import Image from "next/image";
import back from "../../public/images_icons/chevron-down.png";
import warn from "../../public/images_icons/infocircle.png";
import React, { useState } from 'react';
import styles from '../styles/CircularProgressBar.module.css';

export default function Task() {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = (e) => {
    const files = e.target.files;

    if (files.length < 3) {
      const newImages = Array.from(files).map((file) => {
        const reader = new FileReader();

        return new Promise((resolve) => {
          reader.onload = (event) => {
            const imageDataURL = event.target.result;
            resolve(imageDataURL);
          };

          reader.readAsDataURL(file);
        });
      });

      Promise.all(newImages).then((images) => {
        setSelectedImages([...selectedImages, ...images]);
      });
    }
  };

  const handleAddImageClick = () => {
    // Trigger the file input click event programmatically
    document.getElementById('imageInput').click();
  };


  const [checkedCheckboxes, setCheckedCheckboxes] = useState([]);

  const calculateProgress = () => {
    const totalCheckboxes = 2; // Number of checkboxes
    const progress = (checkedCheckboxes.length / totalCheckboxes) * 125; // 440 is the circumference of the circle (2 * π * radius)
    return 125 - progress; // Invert the progress for clockwise animation
  };

  const handleCheckboxChange = (checkboxId) => {
    setCheckedCheckboxes((prevChecked) => {
      if (prevChecked.includes(checkboxId)) {
        return prevChecked.filter((id) => id !== checkboxId);
      } else {
        return [...prevChecked, checkboxId];
      }
    });
  };


  return (
    <>
      <section className={taskStyle.wrapper}>
        <div className={taskStyle.sub_wrap}>
          <div className={taskStyle.back_btn}>
            <Image src={back} alt='' />
            Back
          </div>

          <section className={taskStyle.task_list}>
            <div className={taskStyle.task_title}>
              <h1>
                Tick the tasks you completed
                yesterday
              </h1>


              <div className={styles.progressBarContainer}>

                <div
                  className={styles.progressBar}
                //   style={{ width: `${calculateProgress()}%` }}
                >
                  <div className={styles.inner}>

                  </div>
                </div>

                <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" version="1.1" width="60px" height="60px">
                  <defs>
                    <linearGradient id="GradientColor">
                      <stop offset="0%" stop-color="#e91e63" />
                      <stop offset="100%" stop-color="#673ab7" />
                    </linearGradient>
                  </defs>
                  <circle
                    style={{ strokeDashoffset: `${calculateProgress()}` }}
                    className={styles.circle}
                    cx="37"
                    cy="24"
                    r="20"
                    stroke-linecap="round"
                  />
                </svg>

              </div>

            </div>

            <div className={taskStyle.warning}>
              <Image src={warn} />
              You can optionally add images to prove completion of the tasks you worked on. Images also help you earn more points
            </div>

            <section className={taskStyle.task_total}>

              <div className={taskStyle.task_wrap}>
                <div className={taskStyle.task}>


                  <div className={taskStyle.task_sub}>
                    <p className={taskStyle.task_task}>
                      Worked with
                      <span>
                        @Solomon C.
                      </span>
                      drafting townhall invitation letter
                    </p>

                    <div className={taskStyle.task_img}>
                      {selectedImages.map((image, index) => (
                        <Image key={index} src={image} width={50} height={50} alt={`Selected ${index + 1}`} />
                      ))}
                    </div>
                    <button className={taskStyle.add_btn} onClick={handleAddImageClick}>
                      Add Image
                      <Image src={imageIcon} />
                      <input
                        type="file"
                        id="imageInput"
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={handleImageChange}
                      />
                    </button>

                  </div>
                </div>
                <div>
                  {[1].map((checkboxId) => (

                    <label key={checkboxId} className={taskStyle.container}>
                      <input onChange={() => handleCheckboxChange(checkboxId)}
                        checked={checkedCheckboxes.includes(checkboxId)} type="checkbox" />
                      <div className={taskStyle.checkmark}></div>
                    </label>

                  ))}
                </div>


              </div>


              <div className={taskStyle.task_wrap}>
                <div className={taskStyle.task}>


                  <div className={taskStyle.task_sub}>
                    <p className={taskStyle.task_task}>
                      <span>
                        @Elijah B.
                      </span>
                      has blockers related to withdrawals and local transfers, so I started working on a fix to get the app up and running ASAP
                    </p>
                  </div>

                  {/* <div className={taskStyle.task_img}>
                    {selectedImages.map((image, index) => (
                      <Image key={index} src={image} width={50} height={50} alt={`Selected ${index + 1}`} />
                    ))}
                  </div> */}
                  <button className={`${taskStyle.add_btn} ${taskStyle.btn_display}`} onClick={handleAddImageClick}>
                    Add Image
                    <Image src={imageIcon} />
                    <input
                      type="file"
                      id="imageInput"
                      accept="image/*"
                      style={{ display: 'none' }}
                      onChange={handleImageChange}
                    />
                  </button>


                </div>

                <div>
                  {[2].map((checkboxId) => (
                   <label key={checkboxId} className={taskStyle.container}>
                   <input onChange={() => handleCheckboxChange(checkboxId)}
                     checked={checkedCheckboxes.includes(checkboxId)} type="checkbox" />
                   <div className={taskStyle.checkmark}></div>
                 </label>
                  ))}
                </div>



              </div>

              <button className={taskStyle.proceed_btn}>
                Proceed
              </button>
            </section>
          </section>
        </div>

      </section>
    </>
  )
}
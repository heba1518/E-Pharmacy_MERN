import React, { useHistory, useEffect } from "react";

function Article() {
  window.scrollTo(0, 0);
  return (
    <div className="flex flex-col items-center mt-10">
      <div className="w-2/3 container shadow-sm single-layout-1 items-center">
        <div className="p-6 items-center">
          <header>
            <div className="w-full mb-6">
              <img
                src="https://e1ea09.p3cdn2.secureserver.net/wp-content/uploads/2023/07/high-chol-1024x471.jpg"
                className="w-full h-72 rounded-lg object-cover object-center"
                alt=""
              />
            </div>
            <h1 className="text-3xl font-semibold mb-4">
              Cholesterol 101: What is LP(a)?
            </h1>
            <div className="text-sm text-gray-400 px-2">
              <ul>
                <li className="inline px-2">
                  <i className="fas fa-pencil-alt px-2"></i>
                  Dr. Jack Wolfson
                </li>
                <li className="inline px-2">
                  <i className="fas fa-comment px-2"></i>4 comments
                </li>
                <li className="inline px-2">
                  <i className="fas fa-calendar-alt px-2"></i>
                  28 JAN 2021
                </li>
              </ul>
            </div>
            <i className="mb-6 text-gray-600">
              {/* Medically Reviewed and Written By: Kathleen O’Shea Northrup, MD */}
            </i>
          </header>
          <div className="w-full mb-6">
            <div className="my-7">
              <p>
                Lowering your cholesterol is a well-known way to decrease your
                risk of heart attack or stroke. You’ve likely heard of “good”
                cholesterol (HDL) and “bad” cholesterol (LDL), but what about
                Lipoprotein(a)? Lp(a), as it is more commonly known, has been
                the subject of increasing research in recent years, and the role
                it plays in cardiovascular disease might surprise you. By the
                end of this blog post, you will better understand whether
                getting tested for Lp(a) could make a difference in your health
                or the health of a loved one. But let’s start at the beginning.
              </p>
              <h2 className="text-2xl font-semibold my-3">
                First, what is cholesterol?
              </h2>
              <p>
                Cholesterol is a waxy, fat-like substance that is found in
                almost every cell of your body. Though we think of cholesterol
                as dangerous, it is actually necessary for good health. The body
                needs it to make hormones and help digest fatty foods.
              </p>
              <h2 className="text-2xl font-semibold my-3">
                Where does it come from?
              </h2>
              <p>
                Your body gets all of the cholesterol it needs from your liver,
                where it is produced. The problem is, many foods that we eat
                also contain cholesterol and our body simply doesn’t need all of
                the extra cholesterol we consume. Meats, shrimp, egg yolks, and
                cheese are common sources of dietary cholesterol. In addition,
                those foods contain fat- which causes your liver to make even
                more cholesterol. Some tropical oils (coconut oil, palm kernel
                oil, and palm oil) can also do this. These oils are commonly
                found in baked goods.
              </p>
              <h2 className="text-2xl font-semibold my-3">
                What does cholesterol do?
              </h2>
              <p>
                Your body needs some cholesterol to make hormones and help it to
                digest foods. However, too much cholesterol- especially “bad”
                cholesterol or LDL- can cause fatty deposits to build up in your
                blood vessels. These buildups make it harder for blood to flow
                through the blood vessels, and sometimes they can even break off
                and block a blood vessel. This can lead to a heart attack or
                stroke.
              </p>
              <h2 className="text-2xl font-semibold my-3">
                What are LDL, HDL, and non-HDL cholesterol?
              </h2>
              <p>
                When your doctor wants to check your cholesterol, they will
                typically order a “lipid profile,” which includes total
                cholesterol level, HDL, LDL, and triglycerides. It may also
                include a measurement of non-HDL cholesterol.
              </p>
              <ul className="list-disc list-inside">
                <li>
                  <i>LDL (low-density lipoprotein)</i>: LDL is a type of
                  lipoprotein- a combination of fat (lipid) and protein that
                  carries cholesterol around the body. This is also known as
                  “bad” cholesterol. What makes LDL so bad? LDL causes a buildup
                  of plaque on the walls of arteries. This is known as
                  atherosclerosis, which causes arteries to narrow. Narrow
                  arteries are harder for blood to travel through, and blood
                  clots or pieces of plaque can break off and block them,
                  leading to heart attack or stroke.
                </li>
                <li>
                  <i>HDL (High-density lipoprotein)</i>: HDL is also a type of
                  lipoprotein. This is also known as “good” cholesterol because
                  it carries LDL from other parts of your body back to your
                  liver, where it can be removed from your body.
                </li>
                <li>
                  <i>Non-HDL</i>: There are also smaller amounts of other
                  lipoproteins in your blood that act in similar ways to LDL.
                  This measurement includes those other “non-HDL” cholesterol.
                </li>
              </ul>
              <h2 className="text-2xl font-semibold my-3">
                So, what is LP(a)?
              </h2>
              <p className="pb-3">
                LP (a) stands for lipoprotein (a), which also carries
                cholesterol in the blood. It is quite similar to LDL
                cholesterol, except it is even “stickier.” It is made up of a
                lipoprotein very similar to LDL, plus two other proteins known
                as ApoB and Apo(a). ApoB can cause atherosclerosis and plaque
                buildup, but Apo(a) works differently- when added to a
                lipoprotein, it is like coating it with a fine layer of honey.
                This makes it stick to artery walls and cause plaque buildup,
                much like LDL does- only more effectively. It is also thought to
                increase the risk of forming blood clots. If your level of Lp(a)
                is elevated, you have a two to four times higher risk of a major
                cardiovascular event than someone with low Lp(a) levels. That
                means a two to four times higher risk of heart attack, stroke,
                or limb ischemia (a problem with blood flow to your arms or
                legs). There is also a higher risk of developing aortic
                stenosis, which is a buildup of calcium on one of your heart
                valves that can make it harder for blood to leave your heart.
              </p>
              <p className="pb-3">
                Unlike LDL, however, LP(a) is not affected by what you eat. It
                is made by the liver. The amount of LP(a) your liver makes is
                not something you can control- it is almost completely
                determined by your genes. Lp(a) levels are 70-90% genetically
                determined. For the most part, the level of Lp(a) in your blood
                will be the same when you are 5 years old as it is when you are
                50. There are a few conditions that can slightly impact this,
                such as kidney disease, liver disease, thyroid issues, and
                menopause, but overall your Lp(a) level generally remains the
                same during your lifetime. One in five people worldwide has
                elevated Lp(a) levels and may not even know it. The risk is
                higher in people of African and South Asian descent.
              </p>
              <p className="pb-3">
                At this time, there are no commonly used treatments for an
                elevated Lp(a) level. However, there are currently several
                promising treatments under investigation, so getting tested now
                might help you have important discussions with your doctor about
                these treatments in the future. The current advice is that an
                elevated Lp(a) level should be viewed as another risk factor for
                cardiovascular disease. If your Lp(a) level is elevated, it is
                especially important for you to work with your doctor to lower
                the risks of cardiovascular disease that you can control. These
                include exercising regularly, eating a healthy diet, controlling
                weight, and not smoking. Your doctor may also recommend a daily
                baby aspirin.
              </p>
              <p>
                If your LDL level is also high, taking a cholesterol-lowering
                medication known as a statin is important. There have been some
                studies that show that statins can slightly increase Lp(a)
                levels, but they are still recommended due to their overall
                effects in lowering the risk of heart attack and stroke. In rare
                cases, your doctor may recommend you undergo a weekly procedure
                known as lipoprotein apheresis (which is a way to filter your
                blood through a machine to remove lipoprotein particles).
                Apheresis is only approved by the FDA for patients with a
                condition known as Familial Hypercholesterolemia, however. There
                are also injectable medicines known as PCSK9 inhibitors that can
                decrease Lp(a) levels by approximately 30%, but these are not
                routinely used. Luckily, there are several clinical trials
                currently underway for medications that could be used to lower
                Lp(a) levels by targeting the genes in the body that produce
                Lp(a). Given what we now know about the risks of elevated Lp(a),
                additional options for treatment could make a big difference in
                improving cardiovascular health.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;

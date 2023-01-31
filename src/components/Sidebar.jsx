import Link from "next/link";
import React from "react";
import styles from "@/styles/components/sidebar.module.css"
import { SIDEBAR_CATEGORIES } from "@/constants/sidebar";
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter()

  return (
    <div
      className={ styles.sidebar }
    >
      <Link href="/">
        <img src="/img/logo/logo.png" width={200} alt="" />
      </Link>

      <ul className={ styles.sidebarCategories }>
        {
          SIDEBAR_CATEGORIES.map(category => (
            <li key={category.label} className={ styles.sidebarCategory }>
              <p>{ category.label }</p>
              { 
                Array.isArray(category.subCategories) && (
                  <ul>
                    {
                      category.subCategories.map(subcategory => (
                        <li key={ subcategory.urlTag }>
                          <Link 
                            href={ `/productos/${ subcategory.urlTag }` } 
                            className={ router.asPath === `/productos/${ subcategory.urlTag }` ? styles.active : "" }
                          >
                            { subcategory.label }
                          </Link>
                        </li>
                      ))
                    }
                  </ul>
                )
              }
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Sidebar;

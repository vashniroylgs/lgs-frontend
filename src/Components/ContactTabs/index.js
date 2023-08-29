import "./index.css";

const ContactTabItem = (props) => {
  const { tabDetails, changeTab, isActive } = props;
  const { tabId, displayText } = tabDetails;

  const onChangeTab = () => {
    changeTab(tabId);
    console.log(tabId);
  };

<<<<<<< HEAD
  const activeTabItem = isActive ? 'contactactivetab' : ''

=======
  const activeTabItem = isActive ? "contactactivetab" : "";
>>>>>>> 6a6d2b3bc8e350c2cd7088b1ca6b8355204490c3

  return (
    <li className="contact-tab-item">
      <button
        className={`contact-tab-button ${activeTabItem}`}
        type="button"
        onClick={onChangeTab}
      >
        {displayText}
      </button>
    </li>
<<<<<<< HEAD
  )
}
export default ContactTabItem;
=======
  );
};

export default ContactTabItem;
>>>>>>> 6a6d2b3bc8e350c2cd7088b1ca6b8355204490c3

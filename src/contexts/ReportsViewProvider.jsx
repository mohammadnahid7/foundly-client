import { createContext, useState } from "react";
import { defaultTexts } from "../utils/DefaultTexts";

export const ReportsViewContext = createContext({ view: defaultTexts.reportsGridView });

const ReportsViewProvider = ({ children }) => {
	const [reportsViewMode, setReportsViewMod] = useState(localStorage.getItem(defaultTexts.reportsViewModeLSKey));

	const setReportsViewMode = (view) => {
		localStorage.setItem(defaultTexts.reportsViewModeLSKey, view);
		setReportsViewMod(view);
	};
	return <ReportsViewContext.Provider value={{ reportsViewMode, setReportsViewMode }}>{children}</ReportsViewContext.Provider>;
};

export default ReportsViewProvider;

import Search from './classes/search.js';
import { search_config } from './dataController.js';

export const performSearch = async (req, res) => {
    const search = new Search(search_config, 0, 10, 12);
    try {
        await search.doSearch();
        await search.doClusterDataCollection("export_lombardia");
        // Handle success and send the response
        res.status(200).json({ message: "Search performed successfully" });
    } catch (err) {
        console.log("Timeout error occurred");
        // Handle error and send the response
        res.status(500).json({ error: "Timeout error occurred" });
    }
};
export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <br />
      <input id="wd-name" defaultValue="A1 - ENV + HTML" />
      <br />
      <br />

      <textarea id="wd-description" rows={6} cols={50}>
        The assignment is available online. Submit a link to the landing page of
        your Web application running on Netlify.
      </textarea>

      <br />
      <br />

      <table>
        <tbody>
          <tr>
            <td align="right">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" type="number" defaultValue={100} />
            </td>
          </tr>

          <tr>
            <td align="right">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right">
              <label htmlFor="wd-display-grade">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade">
                <option value="PERCENTAGE">Percentage</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option value="ONLINE">Online</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              Online Entry Options
            </td>
            <td>
              <div>
                <input type="checkbox" id="wd-text-entry" />
                <label htmlFor="wd-text-entry"> Text Entry</label>
              </div>
              <div>
                <input type="checkbox" id="wd-website-url" />
                <label htmlFor="wd-website-url"> Website URL</label>
              </div>
              <div>
                <input type="checkbox" id="wd-media" />
                <label htmlFor="wd-media"> Media Recordings</label>
              </div>
              <div>
                <input type="checkbox" id="wd-annotation" />
                <label htmlFor="wd-annotation"> Student Annotation</label>
              </div>
              <div>
                <input type="checkbox" id="wd-file-upload" />
                <label htmlFor="wd-file-upload"> File Uploads</label>
              </div>
            </td>
          </tr>

          <tr>
            <td align="right">
              <label htmlFor="wd-assign-to">Assign to</label>
            </td>
            <td>
              <input id="wd-assign-to" defaultValue="Everyone" />
            </td>
          </tr>

          <tr>
            <td align="right">
              <label htmlFor="wd-due-date">Due</label>
            </td>
            <td>
              <input id="wd-due-date" type="date" defaultValue="2024-05-13" />
            </td>
          </tr>

          <tr>
            <td align="right">
              <label htmlFor="wd-available-from">Available from</label>
            </td>
            <td>
              <input
                id="wd-available-from"
                type="date"
                defaultValue="2024-05-06"
              />
            </td>
          </tr>

          <tr>
            <td align="right">
              <label htmlFor="wd-available-until">Until</label>
            </td>
            <td>
              <input
                id="wd-available-until"
                type="date"
                defaultValue="2024-05-20"
              />
            </td>
          </tr>
        </tbody>
      </table>

      <br />

      <button>Cancel</button>
      <button>Save</button>
    </div>
  );
}

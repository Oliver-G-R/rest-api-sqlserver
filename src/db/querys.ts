export const querys = {
    getAllLinks: 'SELECT * FROM links',
    getLinkById: 'SELECT * FROM links WHERE id = @id',
    postLinks: 'INSERT INTO links (linkName, description, link) VALUES (@linkName, @description, @link)',
    updateLinks: 'UPDATE links SET linkName = @linkName, description = @description, link = @link WHERE id = @id',
    deleteLink: 'DELETE FROM links WHERE id = @id'
}